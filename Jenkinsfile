pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/barder60/integration_continue_cours'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bash 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bash 'npm test'
      }
    }      
  }
}