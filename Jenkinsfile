pipeline {
  agent any
  tools {nodejs "node14.1.0"}
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/barder60/integration_continue_cours'
      }
    }

    stage('Install dependencies') {
      steps {
         bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }      
  }
}