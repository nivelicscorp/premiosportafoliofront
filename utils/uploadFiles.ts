import { FileTypeModel } from '@models/fileType.model'
import FileType from 'file-type/browser'

// Imagen con peso máximo de 5MB
const FILE_SIZE = 5 * 1024 * 1024
// Declaración de contantes para los tipos de imagenes y videos soportados
const FILE_FORMATS = ['image/jpeg', 'image/png', 'image/jpg']

export const onFileAttachImage = async (
  file: File,
  allFilesImage: FileTypeModel[],
  fileFormats: string[] = FILE_FORMATS,
  pattern?: RegExp
): Promise<string | FileTypeModel> => {
  if (!file) {
    return 'No se ha seleccionado ningún archivo'
  }
  if (file.size > FILE_SIZE) {
    return 'Tamaño máximo de archivo excedido (5MB)'
  }
  if (!(await checkFile(file, fileFormats))) {
    return 'Formato de archivo no permitido'
  }
  if (allFilesImage.some((image) => image.name === file?.name)) {
    return 'El archivo ya ha sido cargado'
  }
  if (pattern && !pattern.test(file?.name)) {
    return 'El archivo no cumple con el patrón de nombre requerido'
  }
  const object: FileTypeModel = {
    filetype: file,
    name: file?.name.replace(/ /g, '_'),
  }
  return object
}

/**
 * Function that checks the internal bytes of file to avoid false extensions
 * @param file File to check
 * @param allowedFormats List of formats allowed to check
 */
const checkFile = (file: any, allowedFormats: string[]) => {
  let result = '-'
  return FileType.fromBlob(file)
    .then((res: any) => {
      if (res?.mime) {
        result = res?.mime
      }
      if (allowedFormats.some((format) => format === result)) {
        return true
      }
      return false
    })
    .catch(() => {
      return false
    })
}
