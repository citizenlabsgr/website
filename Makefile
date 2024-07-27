.PHONY: all
all: install

.PHONY: bootstrap
bootstrap:
	asdf plugin add hugo
	asdf install
	brew install nmap
	pipx install sappy

.PHONY: install
install: themes/.flag
themes/.flag: .gitmodules
	git submodule init
	git submodule update
	@ touch $@

.PHONY: build
build: install
	hugo --verbose

.PHONY: test
test: build

.PHONY: run
run: install
	hugo serve

.PHONY: run-production
run-production: build
	sappy public --port=1313

.PHONY: scan
scan:
	nmap --script ssl-enum-ciphers -p 80,443,8880,8443,8080,2096,2095,2087,2086,2083,2082,2053,2052 citizenlabs.org
	curl -s -D- https://citizenlabs.org | grep -i 'x-frame-options\|content-security-policy'

.PHONY: clean
clean:
	rm -rf public themes
