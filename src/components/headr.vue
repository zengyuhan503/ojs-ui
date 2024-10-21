<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { home_journals } from "../api/list.js";
const isInputs = ref(false);
const isShowSearch = ref(false);
const searchVal = ref("");

const router = useRouter();

function handleEsc(event) {
  if (event.key === "Escape" && isShowSearch.value) {
    isShowSearch.value = false;
  }
}

const clearInput = () => {
  searchVal.value = "";
};

const showSearch = () => {
  isShowSearch.value = true;
};
const hideSearch = () => {
  isShowSearch.value = false;
};
watch(
  () => searchVal.value,
  (val) => {
    if (searchVal.value !== "") {
      isInputs.value = true;
    } else {
      isInputs.value = false;
    }
  }
);

let journal_cates = ref([]);

const getJournalCates = () => {
  home_journals.cates().then((res) => {
    journal_cates.value = res.data.data;
  });
};
const toJournal = (item) => {
  let id = item.journal_id;
  router.push({
    path: "/journalsInfo",
    query: {
      id: id,
    },
  });
};
onMounted(() => {
  getJournalCates();
  window.addEventListener("keydown", handleEsc);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc);
});
</script>
<template>
  <div style="background: rgba(255, 255, 255, 0.95)">
    <div class="header">
      <div class="navs">
        <div class="logo">
          <img src="../assets/image/logo.png" alt="" />
        </div>
        <div class="menu">
          <ul>
            <li>
              <span class="active">HOME</span>
            </li>
            <li>
              <a-dropdown trigger="hover">
                <span> Services <icon-down :size="20" /> </span>
                <template #content>
                  <a-doption>Option 1</a-doption>
                  <a-doption>Option 2</a-doption>
                  <a-doption>Option 3</a-doption>
                </template>
              </a-dropdown>
            </li>
            <li>
              <a-dropdown trigger="hover">
                <span> Policies <icon-down :size="20" /> </span>
                <template #content>
                  <a-doption>Option OptionOptionOption1</a-doption>
                  <a-doption>Option OptionOptionOption 2</a-doption>
                  <a-doption>Option OptionOptionOption 3</a-doption>
                </template>
              </a-dropdown>
            </li>
            <li>
              <a-dropdown trigger="hover">
                <span> Advisory Board <icon-down :size="20" /> </span>
                <template #content>
                  <a-doption>Option 1</a-doption>
                  <a-doption>Option 2</a-doption>
                  <a-doption>Option 3</a-doption>
                </template>
              </a-dropdown>
            </li>
            <li>
              <a-dropdown trigger="hover">
                <span> Journals <icon-down :size="20" /> </span>
                <template #content>
                  <a-doption
                    v-for="(item, index) in journal_cates"
                    @click="toJournal(item)"
                    :key="index"
                  >
                    {{ item.name }}
                  </a-doption>
                </template>
              </a-dropdown>
            </li>
            <li>
              <a-dropdown trigger="hover">
                <span> Support & Resource <icon-down :size="20" /> </span>
                <template #content>
                  <a-doption>Option 1</a-doption>
                  <a-doption>Option 2</a-doption>
                  <a-doption>Option 3</a-doption>
                </template>
              </a-dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div class="actions">
        <div class="search" @click="showSearch">
          <icon-search :size="20" />
        </div>
        <div class="contact">Contact</div>
        <div class="sign">Sign Up</div>
      </div>
    </div>
  </div>

  <div class="docsearch-modal-container" v-if="isShowSearch">
    <div class="docsearch-modal">
      <div class="heads">
        <p class="title">Search Content</p>
        <span class="close-modal">
          <img @click="hideSearch" src="../assets/image/close1.png" alt="" />
        </span>
      </div>
      <div class="search-form">
        <span>
          <img src="../assets/image/serach.png" alt="" />
        </span>
        <input type="text" name="" v-model="searchVal" id="" @input="changeShowClose" />
        <span>
          <img
            style="width: 20px"
            @click="clearInput"
            v-show="isInputs"
            src="../assets/image/close.png"
            alt=""
          />
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.header {
  padding: 24px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  margin: auto;
  background: rgba(255, 255, 255, 0.95);

  .navs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo {
    width: 65px;
    height: 65px;
    position: relative;

    img {
      width: 102px;
      height: 102px;
      position: relative;
      top: -18px;
    }
  }

  .menu {
    margin-left: 61.5px;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      cursor: pointer;
      margin-left: 24px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;

        svg {
          margin-left: 5px;
        }
      }

      span.active {
        color: #e8705a;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

    .search {
      width: 54px;
      height: 54px;
      background: #e8705a;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 4px;

      svg {
        color: #fff;
      }
    }

    .contact {
      width: 152px;
      height: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e8705a;
      color: #e8705a;
      border-radius: 4px;
      margin: 0 12px;
      cursor: pointer;
    }

    .sign {
      width: 214px;
      height: 54px;
      border-radius: 8px;
      opacity: 0px;
      background: #e8705a;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      cursor: pointer;
    }
  }
}

.docsearch-modal-container {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .docsearch-modal {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 560px;
    position: relative;

    .heads {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      margin-bottom: 20px;

      .title {
        font-size: 20px;
        color: #1f3c8a;
        font-weight: 600;
      }
    }

    .close-modal {
      img {
        cursor: pointer;
        width: 20px;
      }
    }

    .search-form {
      position: relative;
      padding: 0 12px;
      height: 56px;
      border: 2px solid #e8705a;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        width: 30px;
        display: block;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      img {
        width: 30px;
        margin-right: 12px;
        cursor: pointer;
      }

      input {
        width: calc(100% - 40px - 12px - 40px);
        height: 48px;
        border: none;
        font-size: 20px;
        color: #e8705a;

        &:focus-visible {
          outline: none;
          border: none !important;
        }
      }
    }
  }
}
</style>
