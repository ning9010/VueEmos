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
    id: 5,
    rule_id: 0,
    status: 1,
    create_time: "2019-08-11 13:36:09",
    update_time: "2021-12-21 19:31:11",
    name: "后台面板",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "help",
    method: "GET",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "主控台",
        desc: "index",
        frontpath: "\/",
        condition: null,
        menu: 1,
        order: 20,
        icon: "home-filled",
        method: "GET",
        child: [],
      },
    ],
  },
  {
    id: 5,
    rule_id: 0,
    status: 1,
    create_time: "2019-08-11 13:36:09",
    update_time: "2021-12-21 19:31:11",
    name: "投诉信息管理",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    method: "GET",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "投诉信息录入",
        desc: "index",
        frontpath: "\/complaint",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        method: "GET",
        child: [],
      },
    ],
  },
  {
    id: 5,
    rule_id: 0,
    status: 1,
    create_time: "2019-08-11 13:36:09",
    update_time: "2021-12-21 19:31:11",
    name: "指标查询",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Search",
    method: "GET",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "4G指标查询",
        desc: "index",
        frontpath: "\/indicatorQuery4G",
        condition: null,
        menu: 2,
        order: 20,
        icon: "Search",
        method: "GET",
        child: [],
      },
      {
        id: 11,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "5G指标查询",
        desc: "index",
        frontpath: "\/indicatorQuery4G",
        condition: null,
        menu: 2,
        order: 20,
        icon: "Aim",
        method: "GET",
        child: [],
      },
    ],
  },
  {
    id: 5,
    rule_id: 0,
    status: 1,
    create_time: "2019-08-11 13:36:09",
    update_time: "2021-12-21 19:31:11",
    name: "小区工参查询",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    method: "GET",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "小区工参查询",
        desc: "index",
        frontpath: "\/complaint",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        method: "GET",
        child: [],
      },
    ],
  },
  {
    id: 5,
    rule_id: 0,
    status: 1,
    create_time: "2019-08-11 13:36:09",
    update_time: "2021-12-21 19:31:11",
    name: "报销管理",
    desc: "index",
    frontpath: null,
    condition: null,
    menu: 1,
    order: 1,
    icon: "Document",
    method: "GET",
    child: [
      {
        id: 10,
        rule_id: 5,
        status: 1,
        create_time: "2019-08-11 13:37:02",
        update_time: "2021-12-21 20:21:23",
        name: "报销详情",
        desc: "index",
        frontpath: "\/test",
        condition: null,
        menu: 1,
        order: 20,
        icon: "List",
        method: "GET",
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
