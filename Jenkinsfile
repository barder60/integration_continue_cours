pipeline {
    agent any
 
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                git 'https://github.com/barder60/integration_continue_cours'
                sh 'npm install'
            }
        stage('Test') {
                sh 'npm test'
            }
        }
    }
}