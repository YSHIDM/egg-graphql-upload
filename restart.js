// async function restart() {
//   console.log('重启2')
//   const { stdout, stderr } = await spawn('.', [path.join(this.ctx.app.baseDir, 'u.sh')], {
//     detached: true,
//     stdio: 'ignore'
//   })
//   console.log(stdout, stderr)

// }
// restart().then(() => process.exit())