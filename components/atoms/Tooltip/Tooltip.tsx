import styles from '@styles/scss/atoms/tooltip.module.scss'
import { useState } from 'react'

interface TooltipProps {
  tooltipLabel: string
  closePosition?: boolean
}

const Tooltip = ({ tooltipLabel, closePosition }: TooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  return (
    <>
      <div
        className={
          styles.tooltipButton + ' ' + (closePosition && styles.labelTooltip)
        }
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        i
      </div>
      {isTooltipVisible && (
        <p
          className={
            styles.tooltipText + ' ' + (closePosition && styles.labelTooltip)
          }
        >
          {tooltipLabel}
        </p>
      )}
    </>
  )
}

export default Tooltip
