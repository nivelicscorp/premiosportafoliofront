import Button from '@atoms/Button/Button'
import style from '@styles/scss/atoms/buttons.module.scss'

interface StepButtonProps {
  stepNumber: number
  active: boolean
  conpleted: boolean
  nameStep?: string
  onClick: () => void
  className?: string
}

const StepButton = ({
  stepNumber,
  nameStep,
  active = false,
  onClick,
  className,
  conpleted = false,
}: StepButtonProps) => {
  return (
    <Button
      title={stepNumber.toString()}
      clickHandler={onClick}
      // variant={active ? 'secondary' : 'primary'}
      variant='tab'
      className={active ? style?.active : conpleted ? style?.completed : ''}
      nameStep={nameStep}
    ></Button>
  )
}

export default StepButton
