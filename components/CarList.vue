<template>
  <div class="flex flex-col space-y-1 m-10 w-64 mx-auto">
    <span class="font-bold text-2xl">Car List:</span>
    <draggable v-model="cars" tag="ul" @change="onchange($event)">
      <transition-group type="transition" name="flip-list">
        <li v-for="car in cars" :key="car.id" class=" block p-1 bg-gray-300 border-l-2 border-green-300 m-1">
          {{ car.sortOrder }} {{ car.title }}
        </li>
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data () {
    return {
      cardata: [{
        id: 1,
        title: 'Abarth',
        description: '',
        sortOrder: 1
      },
      {
        id: 2,
        title: 'Alfa Romeo',
        description: '',
        sortOrder: 2
      },
      {
        id: 3,
        title: 'Aston Martin',
        description: '',
        sortOrder: 3
      },
      {
        id: 4,
        title: 'Audi',
        description: '',
        sortOrder: 4
      },
      {
        id: 5,
        title: 'Bentley',
        description: '',
        sortOrder: 5
      },
      {
        id: 6,
        title: 'BMW',
        description: '',
        sortOrder: 6
      },
      {
        id: 7,
        title: 'Bugatti',
        description: '',
        sortOrder: 7
      },
      {
        id: 8,
        title: 'Cadillac',
        description: '',
        sortOrder: 8
      },
      {
        id: 9,
        title: 'Chevrolet',
        description: '',
        sortOrder: 9
      },
      {
        id: 10,
        title: 'Chrysler',
        description: '',
        sortOrder: 10
      }]
    }
  },

  computed: {
    ...mapState({
      cars1: (state) => { return state.cars.cars }
    }),
    cars: {
      get () {
        return this.cars1
      },
      set () {
        //
      }
    }
  },
  mounted () {
    this.fetchCarData(this.cardata)
  },
  methods: {
    ...mapActions({
      fetchCarData: 'cars/fetchCarData',
      updateList: 'cars/updateCarList'
    }),
    onchange (a) {
      this.updateList(a.moved)
    }
  }
}
</script>
<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.3s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
