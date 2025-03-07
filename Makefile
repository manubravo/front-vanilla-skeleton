.PHONY: default app install dev build clean

default: app

app: install dev

install:
	npm install

dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules dist
