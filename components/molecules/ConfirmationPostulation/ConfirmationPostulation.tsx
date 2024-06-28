import LinkButton from '@atoms/LinkButton/LinkButton'
import styles from '@styles/scss/molecules/welcome.module.scss'

const ConfirmationPostulation = () => {
  return (
    <div
      className={styles?.welcomBlock + ' ' + styles?.success + ' form-content'}
    >
      <div className={styles?.welcomBlock__title}>
        <h1>
          <span> Inscripción finalizada </span>
          <span> con exíto </span>
        </h1>
      </div>
      <div className={styles?.welcomBlock__msg}>
        <p>
          Tu postulación ha sido exitosa, a tu correo estará llegando la
          confirmación.
        </p>
        <p>
          <strong> ¡Gracias por Participar! </strong>
        </p>
        <LinkButton
          variant={'primary'}
          target='_self'
          url='/usuario'
          title='Ir al inicio'
        />
      </div>
    </div>
  )
}

export default ConfirmationPostulation
