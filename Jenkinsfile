pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/barder60/integration_continue_cours'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }      
  }
}