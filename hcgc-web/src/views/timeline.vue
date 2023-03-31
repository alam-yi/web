<template>
  <div class="m-timeline-area" :style="`width: ${width}px`">
    <div class="m-timeline">
      <div :class="['m-timeline-item', {'last': index === timelineDesc.length - 1}]"
        v-for="(desc, index) in timelineDesc" :key="index">
        <div class="u-tail"></div>
        <div class="u-dot"></div>
        <div class="u-content">{{ desc || '--' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timeline',
    props: {
      timelineDesc: { // 时间轴内容数组
        type: Array,
        default: () => {
          return []
        }
      },
      width: { // 时间轴区域总宽度
        type: Number,
        default: 360
      }
    }
  }
</script>
<style>
  .m-timeline-area {
    margin: 0 auto;
  }

  .m-timeline-area {
    margin: 0 auto;
  }

  .m-timeline-item {
    position: relative;
    padding-bottom: 30px;
  }

  .u-tail {
    position: absolute;
    top: 10px;
    left: 5px;
    height: calc(100% - 10px);
    border-left: 2px solid #1890ff;
  }

  .u-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #1890ff;
    border-radius: 50%;
  }

  .u-content {
    position: relative;
    top: -6px;
    margin-left: 25px;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 24px;
  }

  .last>.u-tail {
    display: none;
  }
</style>