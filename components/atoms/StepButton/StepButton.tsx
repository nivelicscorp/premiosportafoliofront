import Button from '@atoms/Button/Button'
import style from '@styles/scss/atoms/buttons.module.scss'

interface StepButtonProps {
  stepNumber: number
  active: boolean
  conpleted: boolean
  nameStep?: string
  onClick: () => void
  className?: string
  fiveStep?: boolean
}

const StepButton = ({
  stepNumber,
  nameStep,
  active = false,
  onClick,
  className,
  conpleted = false,
  fiveStep = false,
}: StepButtonProps) => {
  return (
    <Button
      title={stepNumber.toString()}
      clickHandler={onClick}
      variant='tab'
      className={active ? style?.active : conpleted ? style?.completed : ''}
      nameStep={nameStep}
      fiveStep={fiveStep}
    ></Button>
  )
}

export default StepButton
