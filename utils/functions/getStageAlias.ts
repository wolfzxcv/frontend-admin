/**
 * Get Stage alias os, ma, ea
 */
export default function getStageAlias(stage?: string) {
  return stage?.slice(0, 2) || ''
}
