workspace(name = "bazel_web_test_bugs")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

NODEJS_VERSION="10.13.0"
YARN_VERSION="1.12.1"


RULES_NODEJS_VERSION="0.27.1"
RULES_NODEJS_VERSION_SHA256="5c86b055c57e15bf32d9009a15bcd6d8e190c41b1ff2fb18037b75e0012e4e7c"


http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/" + RULES_NODEJS_VERSION + "/rules_nodejs-" + RULES_NODEJS_VERSION + ".tar.gz"],
    sha256 = RULES_NODEJS_VERSION_SHA256
)


load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install", "check_bazel_version")
check_bazel_version(minimum_bazel_version = "0.21.0")

node_repositories(
  preserve_symlinks = False,
  node_version = NODEJS_VERSION,
  yarn_version = YARN_VERSION,
  package_json = ["//:package.json"]
)

yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
  included_files = [".js", ".d.ts", ".json", ".node", ".bzl", "WORKSPACE"],
  quiet = False,
)

# Fetch transitive Bazel dependencies of npm_bazel_typescript
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()

load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")
rules_karma_dependencies()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")
web_test_repositories()
browser_repositories(
    chromium = True,
    firefox = True,
)