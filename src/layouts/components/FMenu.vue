<template>
  <div class="f-menu">
    <el-menu
      :default-active="defaultActive"
      unique-opened
      :collapse="isCollapse"
      default-active="2"
      class="border-0"
      @select="handleSelect"
      :collapse-transition="false"
    >
      <template v-for="(item, index) in asideMenus" :key="index">
        <el-sub-menu
          v-if="item.child && item.child.length > 0"
          :index="item.name"
        >
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.child"
            :key="index2"
            :index="item2.frontpath"
          >
            <el-icon>
              <component :is="item2.icon"></component>
            </el-icon>
            <span>{{ item2.name }}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.frontpath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const route = useRoute();

// 默认选中
const defaultActive = ref(route.path);

// 监听路由变化
onBeforeRouteUpdate((to, from) => {
  defaultActive.value = to.path;
});

const asideMenus = ref([
  {
    id: 1,
    rule_id: 0,
    status: 1,
    name: "后台面板",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "help",
    child: [
      {
        id: 10,
        status: 1,
        name: "主控台",
        desc: "index",
        frontpath: "\/",
        condition: null,
        menu: 1,
        order: 20,
        icon: "home-filled",
        child: [],
      },
    ],
  },
  {
    id: 2,
    rule_id: 0,
    status: 1,
    name: "投诉信息管理",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        name: "投诉信息录入",
        desc: "index",
        frontpath: "\/complaint",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        child: [],
      },
    ],
  },
  {
    id: 3,
    rule_id: 0,
    status: 1,
    name: "指标查询",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Search",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        name: "4G指标查询",
        desc: "index",
        frontpath: "\/indicatorQuery4G",
        condition: null,
        menu: 2,
        order: 20,
        icon: "Search",
        child: [],
      },
      {
        id: 4,
        rule_id: 5,
        status: 1,
        name: "5G指标查询",
        desc: "index",
        frontpath: "\/indicatorQuery4G",
        condition: null,
        menu: 2,
        order: 20,
        icon: "Aim",
        child: [],
      },
    ],
  },
  {
    id: 5,
    rule_id: 0,
    status: 1,
    name: "小区工参查询",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        name: "小区工参查询",
        desc: "index",
        frontpath: "\/complaint",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        child: [],
      },
    ],
  },
  {
    id: 6,
    rule_id: 0,
    status: 1,
    name: "报销管理",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        name: "报销详情",
        desc: "index",
        frontpath: "\/test",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        child: [],
      },
    ],
  },
]);

const handleSelect = (e) => {
  router.push(e);
};
</script>
<style>
.f-menu {
  transition: all 0.2s;
  top: 64px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @apply shadow-md fixed bg-light-50;
}
.f-menu::-webkit-scrollbar {
  width: 0px;
}
</style>
