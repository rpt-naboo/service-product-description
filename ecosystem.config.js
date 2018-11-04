module.exports = {
  apps: [{
    name: 'server',
    script: './server/index.js',
  }],
  deploy: {
    production: {
      key: '~/.ssh/hack-reactor-key.pem',
      user: 'ubuntu',
      host: '52.34.129.254',
      ref: 'origin/master',
      repo: 'git@github.com:rpt-naboo/service-product-description.git',
      path: '/home/ubuntu/service-product-description',
      'post-deploy': 'npm install',
    }
  }
}

