#!/bin/bash
cd $(dirname $0)
mkdir -p dist/{bin,lang}
printf <<EOS > ./dist/bin/space
#!/bin/sh
if [ -z "$(command -v node)" ]; then
    printf "Error: Node.js is not found.\n"
    printf "Please install Node.js.\n"
    exit 1
fi
cd $(dirname $0)
NODE_ENV=production node ./space.js
exit $?

EOS
chmod 755 dist/bin/space
cp lang/* dist/lang
exit 0

