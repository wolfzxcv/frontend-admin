import getStageAlias from './getStageAlias'

interface StageValue {
  os: string
  ma: string
  ea?: string
}

/**
 * Convert stage to value.
 * @param stage
 * @param value
 */
export default function stageToValue(stage: string, value: StageValue) {
  const stageAlias = getStageAlias(stage)

  switch (stageAlias) {
    case 'os':
    case 'ma':
      return value[stageAlias]
    case 'ea':
      return value[stageAlias] || value.ma
    default:
      return value.os
  }
}
