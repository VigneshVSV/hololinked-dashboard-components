call cd mobx-render-engine
call npm run uninstall-node-modules
call npm run clean
call npm install .
call npm run build 
call npm run pack
call cd ..
call cd mui-mobx-render-engine 
call npm run uninstall-node-modules
call npm run clean
call npm install .
call npm run build
call npm run pack 
call cd ..
call cd hololinked-dashboard-components
call npm run uninstall-node-modules
call npm run clean
call npm install .
call npm run build
call npm run pack
call cd ..
call cd hololinked-portal
call npm run uninstall-node-modules 
call npm install .
call npm run install-possibly-outdated
PAUSE