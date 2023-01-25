export default {
  root: () => '/',
  proposals: () => '/proposals',
  votes: () => '/votes',
  activeProjects: () => '/active_projects',
  rewards: () => '/rewards',
  auth: {
    root: () => '/auth',
    logIn: () => '/auth/log_in',
    logInWithNumio: () => '/auth/numio',
    signUp: () => '/auth/sign_up',
  },
}
