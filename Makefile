.PHONY: all
all: install

.PHONY: install
install: themes/.flag
themes/.flag: .gitmodules
	git submodule init
	git submodule update
	@ touch $@

.PHONY: build
build: install
	hugo --environment=production --verbose

.PHONY: test
test: build

.PHONY: run
run: install
	hugo serve

.PHONY: clean
clean:
	rm -rf themes/*
