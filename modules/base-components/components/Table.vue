<template>
  <div class="table">
    <slot name="header" :total="total" />

    <!-- // title  -->
    <div class="table_header table_row">
      <div v-if="showIndex" class="table_cell">序號</div>
      <div
        v-for="column in columns"
        :key="column.title"
        class="table_cell"
        :class="column.titleClass"
        :style="column.titleStyle"
      >
        {{ column.title }}
      </div>
    </div>
    <!--  title // -->
    <!-- // content  -->
    <div class="table_body">
      <div
        v-for="(item, index) in formatData"
        :key="index"
        class="table_row border-bottom"
      >
        <div v-if="showIndex" class="table_cell text-center">
          {{ index + 1 }}
        </div>
        <div
          v-for="column in columns"
          :key="column.dataIndex"
          class="table_cell"
          :class="column.contentClass"
          :style="column.contentStyle"
        >
          <template v-if="column.slot && column.dataIndex">
            <slot
              :name="column.slot"
              :data="item"
              :value="item[column.dataIndex]"
              :index="index"
            />
          </template>
          <template v-else-if="column.slot">
            <slot
              :name="column.slot"
              :data="item"
              :value="item"
              :index="index"
            />
          </template>
          <template v-else-if="column.dataIndex">
            {{ item[column.dataIndex] }}
          </template>
        </div>
      </div>
    </div>
    <!--  content // -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TableColumns } from '../@types'

@Component({
  name: 'Table',
})
export default class Table extends Vue {
  /** 欄位資訊 */
  @Prop({ type: Array, default: () => [] })
  columns!: TableColumns[]

  /** 表單資料 */
  @Prop({ type: Array, default: () => [] })
  data!: any[]

  /** 是否顯示序號 */
  @Prop({ type: Boolean, default: true })
  showIndex!: boolean

  get total(): number {
    return this.data.length || this.formatData.length || 0
  }

  /** 格式化資料 */
  get formatData() {
    const dataList = [...this.data]
    /** 格式化欄位列表 */
    const formatFields = this.columns.filter(({ format }) => format)

    if (formatFields.length > 0) {
      return dataList.map((data) => {
        const object = {}

        Object.keys(data).forEach((key) => {
          const field = formatFields.find(({ dataIndex }) => dataIndex === key)
          object[key] = field ? field.format!(data[key], data) : data[key]
        })
        return object
      })
    } else {
      return dataList
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: table;
  width: 100%;

  border-collapse: collapse;
  &_header {
    background-color: black;
    color: white;
    display: table-header-group;
    text-align: center;
    font-weight: 600;
  }
  &_body {
    display: table-row-group;
  }
  &_row {
    display: table-row;
  }
  &_cell {
    padding: 10px;
    display: table-cell;
  }
}
</style>
