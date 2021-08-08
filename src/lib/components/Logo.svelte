<script>
  export let title
</script>

<span class="text-primary"
  ><svg aria-label={title} length="auto" height="30">
    <text x="0" y="20">{title}</text>
  </svg>
</span>

<style>
  text {
    fill: currentColor;
  }
</style>
