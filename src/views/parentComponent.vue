<template>
  <div>
    <h3>
      we will use parentComponent.vue and childComponent.vue to show dependency
      injection via "provide" and "inject"
    </h3>
    <hr />
    <h2>ParentCompoenet</h2>
    <div>
      <h5>firstState using reactive</h5>
      <span>{{ firstState.message }}</span>
    </div>
    <div>
      <h5>secondState using ref</h5>
      <span>{{ secondState }}</span>
    </div>
    <div>
      <h5>
        thirdState using simple method(one way direction from parent to child)
      </h5>
      <span>{{ thirdState }}</span>
    </div>
    <div>
      <h5>
        fourthState (one way direction from parent to child) and using Symbol
        for key
      </h5>
      <span>{{ fourthState }}</span>
    </div>
    <hr />
    <childComponent></childComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, provide, ref } from "@vue/composition-api";
import childComponent from "@/components/childComponent.vue";
export default defineComponent({
  components: { childComponent },
  setup() {
    //using reactive..............................
    const firstState = reactive({
      // since we use reactive, this state remains reative in all nested childs
      message: "Hello SeyyedKhandon",
    });
    provide("firstKey", firstState); // 1th param is a key and it should be unique

    //using ref...................................
    const secondState = ref("2"); // this is also remains reactive
    provide("secondKey", secondState);

    //using simple................................
    const thirdState = "im not reactive";
    provide("thirdKey", thirdState); // 1th param is a key and it should be unique

    //using Symbol to make key unique throughtout the project
    const fourthState = "im not reactive";
    provide(Symbol.for("mykey"), fourthState); // 1th param is a key and it should be unique

    return {
      firstState,
      secondState,
      thirdState,
      fourthState,
    };
  },
});
</script>
<style lang="scss" scoped>
div {
  margin: 0 20% 0 20%;
  text-align: left;
}
span {
  color: cadetblue;
}
</style>
