<template>
  <canvas
    id="s-canvas"
    :title="$tc('components.refresh_code')"
    :width="contentWidth"
    :height="contentHeight"
    @click.stop="clickable ? refreshCode() : false"
  ></canvas>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
  name: 'Identify',
})
export default class extends Vue {
  /** 外部綁的v-model，註冊碼 */
  @Prop({ type: String })
  value!: string

  /** 要產出幾位數 */
  @Prop({ type: Number, default: 4 })
  amount!: number

  /** 字型最小值 */
  @Prop({ type: Number, default: 25 })
  fontSizeMin!: number

  /** 字型最大值 */
  @Prop({ type: Number, default: 35 })
  fontSizeMax!: number

  /** 驗證碼圖片背景色最小值 */
  @Prop({ type: Number, default: 200 })
  backgroundColorMin!: number

  /** 驗證碼圖片背景色最大值 */
  @Prop({ type: Number, default: 220 })
  backgroundColorMax!: number

  /** 背景干擾點最小值 */
  @Prop({ type: Number, default: 60 })
  dotColorMin!: number

  /** 圖片寬度 */
  @Prop({ type: Number, default: 116 })
  contentWidth!: number

  /** 圖片高度 */
  @Prop({ type: Number, default: 38 })
  contentHeight!: number

  /** 是否使用點擊圖片換下一張
   *
   * 或由外部呼叫
   * ;(this.$refs.identify as any).refreshCode()
   */
  @Prop({ type: Boolean, default: true })
  clickable!: boolean

  mounted() {
    this.refreshCode()
  }

  refreshCode() {
    const newVal = this.makeCode()
    this.$emit('input', newVal)
  }

  @Watch('value')
  onValueChanged() {
    this.drawPic()
  }

  // eslint-disable-next-line
  makeCode() {
    let newVal = ''
    for (let i = 0; i < this.amount; i++) {
      newVal += this.randomNum(0, 9)
    }
    return newVal
  }

  // 生成一個隨機數
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  // 生成一個隨機的顏色
  randomColor(min, max) {
    const r = this.randomNum(min, max)
    const g = this.randomNum(min, max)
    const b = this.randomNum(min, max)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  drawPic() {
    const canvas = document.getElementById('s-canvas') as HTMLCanvasElement

    const ctx = canvas.getContext('2d')

    if (ctx) {
      ctx.textBaseline = 'bottom'
      // 繪製背景
      ctx.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      )
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      // 繪製文字
      for (let i = 0; i < this.value.length; i++) {
        this.drawText(ctx, this.value[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    }
  }

  drawText(ctx, txt, i) {
    ctx.fillStyle = this.randomColor(50, 160) // 隨機生成字型顏色
    ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei' // 隨機生成字型大小
    const x = (i + 1) * (this.contentWidth / (this.value.length + 1))
    const y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
    const deg = this.randomNum(-30, 30)
    // 修改座標原點和旋轉角度
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(txt, 0, 0)
    // 恢復座標原點和旋轉角度
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
  }

  drawLine(ctx) {
    // 繪製干擾線
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = this.randomColor(100, 200)
      ctx.beginPath()
      ctx.moveTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      )
      ctx.lineTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      )
      ctx.stroke()
    }
  }

  drawDot(ctx) {
    // 繪製干擾點
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = this.randomColor(0, 255)
      ctx.beginPath()
      ctx.arc(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight),
        1,
        0,
        2 * Math.PI
      )
      ctx.fill()
    }
  }
}
</script>

<style lang="scss" scoped>
#s-canvas {
  &:hover {
    cursor: pointer;
  }
}
</style>
