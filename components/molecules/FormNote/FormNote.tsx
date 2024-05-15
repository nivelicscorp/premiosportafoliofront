import React from 'react'
import styles from '@styles/scss/components/forms/formNote.module.scss'

interface formsnote {
  textNote?: string
}

const FormNote = ({ textNote }: formsnote) => {
  return (
    <div className={styles?.formNote}>
      <p className={styles?.formNote__p}>
        <strong> Nota </strong> {textNote}
      </p>
    </div>
  )
}

export default FormNote
