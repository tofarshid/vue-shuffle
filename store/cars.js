export const state = () => ({
  cars: [],
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions = {
  fetchCarData({ commit }, payload) {
    commit("setCarData", payload);
  },
  async updateCarList({ commit }, payload) {
    const direction = { direction: payload.oldIndex < payload.newIndex }; // true top>bottom, false bottom>top
    const movingIndex = { count: Math.abs(payload.oldIndex, payload.newIndex) };

    const directiion = payload.oldIndex < payload.newIndex;
    if (directiion) {
      for (let i = payload.oldIndex; i < payload.newIndex; i++) {
        await sleep(200);
        commit("updateCarList", { ...payload, ...movingIndex, ...direction });
        movingIndex.count++;
      }
    } else {
      for (let i = payload.newIndex; i < payload.oldIndex; i++) {
        await sleep(200);
        commit("updateCarList", { ...payload, ...movingIndex, ...direction });
        movingIndex.count--;
      }
    }
  },
};
export const mutations = {
  setCarData: (state, payload) => {
    state.cars = payload;
  },
  updateCarList: (state, payload) => {
    let swapFrom, swapTo;
    if (payload.direction) {
      swapFrom = { sortOrder: payload.count + 1 };
      swapTo = { sortOrder: payload.count + 2 };
    } else {
      swapFrom = { sortOrder: payload.count + 1 };
      swapTo = { sortOrder: payload.count };
    }

    state.cars = state.cars.map(
      (item) =>
        (item =
          item.sortOrder === swapFrom.sortOrder
            ? state.cars
                .filter((item) => item.sortOrder === swapTo.sortOrder)
                .map((index) => (index = { ...index, ...swapFrom }))[0]
            : item.sortOrder === swapTo.sortOrder
            ? state.cars
                .filter((item) => item.sortOrder === swapFrom.sortOrder)
                .map((index) => (index = { ...index, ...swapTo }))[0]
            : item)
    );
  },
};
