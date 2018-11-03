module.exports = {
  apps: [{
    name: 'server',
    script: './server/index.js',
    env: {
      NODE_ENV: 'development',
    }
  }],
  deploy: {
    production: {
      key: '~/.ssh/hack-reactor/hack-reactor-key.pem',
      user: 'ubuntu',
      host: [52.34.129.254],
      ref: 'origin/master',
      repo: 'git@github.com:rpt-naboo/service-product-description.git',
      path: '/home/ubuntu/service-product-description',
      post-deploy: 'npm install && npm run react-dev',
    }

  }
}

