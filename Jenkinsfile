node {
    def nodeHome = tool name: 'node-9.8.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('npm install') {
        sh ""
    }

    stage('unit tests') {
        sh ""
    }

    stage('protractor tests') {
        sh "protractor conf.js"
    }

    stage('deploying') {
        sh ""
        
    }
}