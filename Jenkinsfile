pipeline {
    agent any
 
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                git https://github.com/barder60/integration_continue_cours
                sh 'npm init'
                sh 'npm install jest'
            }
        stage('Test') {
                sh 'npm run node_modules/.bin/jest --forceExit'
            }
        }
    }
}