<template>
  <div>
    <h3>
      Child Component
    </h3>
    <div>
      <h5>firstState</h5>
      <input type="text" v-model="firstState.message" />
    </div>
    <div>
      <h5>secondState</h5>
      <input type="text" v-model="secondState" />
    </div>
    <div>
      <h5>thirdState</h5>
      <input type="text" v-model="thirdState" />
    </div>
    <div>
      <h5>fourthState</h5>
      <input type="text" v-model="fourthState" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const firstState = inject("firstKey", { message: "" });
    const secondState = inject("secondKey");
    const thirdState = inject("thirdKey");
    const fourthState = inject(Symbol.for("mykey"));
    return {
      firstState,
      secondState,
      thirdState,
      fourthState,
    };
  },
});
</script>
