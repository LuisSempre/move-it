import { MutationTree } from 'vuex';

export interface State {
  time: number;
  isActive: boolean;
  hasCompleted: boolean;
}

export interface Getters {
  minutes: (state: State) => number;
  seconds: (state: State) => number;
}
