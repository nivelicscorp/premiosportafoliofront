interface StepButtonProps {
  stepNumber: number
  onClick: () => void
}

const StepButton = ({ stepNumber, onClick }: StepButtonProps) => {
  return <button onClick={onClick}>{stepNumber}</button>
}

export default StepButton
