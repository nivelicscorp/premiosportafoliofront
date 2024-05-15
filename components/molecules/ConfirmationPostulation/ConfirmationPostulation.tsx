import LinkButton from '@atoms/LinkButton/LinkButton'

const ConfirmationPostulation = () => {
  return (
    <div>
      <h2>Inscripción finalizada</h2>
      <h3>Con Éxito</h3>
      <p>
        Tu postulación ha sido exitosa, a tu correo te estará llegado la
        confirmación.
      </p>
      <p>¡Gracias por Participar!</p>
      <LinkButton
        title='Ir al Inicio'
        url='/usuario'
        target={'_self'}
        variant={'primary'}
      />
    </div>
  )
}

export default ConfirmationPostulation
