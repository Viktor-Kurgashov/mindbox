import { createSlice } from '@reduxjs/toolkit';

const data = {
  items: [
    { id: 'id1', title: 'Тестовое задание', completed: false },
    { id: 'id2', title: 'Прекрасный код', completed: false },
    { id: 'id3', title: 'Покрытие тестами', completed: false },
  ],
  tab: 'all', // active || completed
};

const setTabItems = (items, tab) => {
  return (tab === 'active')
    ? items.filter(i => !i.completed)
    : (tab === 'completed')
    ? items.filter(i => i.completed)
    : items;
};

data.tabItems = setTabItems(data.items);



export const tasks = createSlice({
  name: 'tasks',
  initialState: data,

  reducers: {
    create: (state, action) => {
      state.items.push({
        title: action.payload,
        completed: false,
        id: 'task' + Date.now()
      });
      state.tabItems = setTabItems(state.items, state.tab);
    },

    complete: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items[index].completed = true;
      state.tabItems = setTabItems(state.items, state.tab);
    },

    clearCompleted: (state) => {
      state.items = state.items.filter(item => !item.completed);
      state.tabItems = setTabItems(state.items, state.tab);
    },

    selectTab: (state, action) => {
      switch (action.payload) {
        case 'active':
          state.tabItems = setTabItems(state.items, 'active');
          state.tab = 'active';
          break;

        case 'completed':
          state.tabItems = setTabItems(state.items, 'completed');
          state.tab = 'completed';
          break;
        
        default:
          state.tabItems = setTabItems(state.items);
          state.tab = 'all';
          break;
      }
    },
  }
});

export const { create, complete, selectTab, clearCompleted } = tasks.actions;
export const storeTasks = (state) => state.tasks.tabItems;
export const storeTab = (state) => state.tasks.tab;
export default tasks.reducer;