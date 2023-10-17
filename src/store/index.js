import { createStore } from "vuex";
import { findUsers } from "@/api";
import paramsAgregate from "@/utils/paramsAgregate";

export default createStore({
  state: {
    users: [],
    selectedUser: null,
    pending: false,
    filter: "",
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PENDING(state, value) {
      state.pending = value;
    },
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    SET_FILTER(state, value) {
      state.filter = value;
    },
  },
  actions: {
    async fetchUsers({ commit, getters }) {
      try {
        commit("SET_PENDING", true);
        const filter = getters.getFilter;
        const { data } = await findUsers(paramsAgregate(filter));
        commit("SET_USERS", data);
        commit("SET_PENDING", false);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
    selectUser({ commit }, payload) {
      commit("SET_SELECTED_USER", payload);
    },
    createFilter({ commit }, payload) {
      commit("SET_FILTER", payload);
    },
    resetUsers({ commit }) {
      commit("SET_USERS", []);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectedUser(state) {
      return state.selectedUser;
    },
    getFilter(state) {
      return state.filter;
    },
    getPendingStatus(state) {
      return state.pending;
    },
  },
});
