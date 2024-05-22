import LinkButton from '@atoms/LinkButton/LinkButton'
import styles from '@styles/scss/molecules/welcome.module.scss'

const ConfirmationPostulation = () => {
  return (
    // <div>
    //   <h2>Inscripción finalizada</h2>
    //   <h3>Con Éxito</h3>
    //   <p>
    //     Tu postulación ha sido exitosa, a tu correo te estará llegado la
    //     confirmación.
    //   </p>
    //   <p>¡Gracias por Participar!</p>
    //   <LinkButton
    //     title='Ir al Inicio'
    //     url='/usuario'
    //     target={'_self'}
    //     variant={'primary'}
    //   />
    // </div>
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
          Tu postulación ha sido exitosa, a tu correo te estará llegado la a tu
          cuenta confirmación.
        </p>
        <p>
          <strong> ¡Gracias por Participar! </strong>
        </p>
        <LinkButton
          variant={'primary'}
          target='_self'
          url='/usuario/postulacion'
          title='Ir al inicio'
        />
      </div>
    </div>
  )
}

export default ConfirmationPostulation
