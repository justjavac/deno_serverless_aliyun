build-js:
	deno bundle mod.ts server.js

build: build-js
	fun build

deploy: build
	fun deploy -y
