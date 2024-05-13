import Button from '@atoms/Button/Button'

interface StepButtonProps {
  stepNumber: number
  active: boolean
  onClick: () => void
}

const StepButton = ({
  stepNumber,
  active = false,
  onClick,
}: StepButtonProps) => {
  return (
    <Button
      title={stepNumber.toString()}
      clickHandler={onClick}
      variant={active ? 'secondary' : 'primary'}
    ></Button>
  )
}

export default StepButton
