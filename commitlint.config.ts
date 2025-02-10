import { type UserConfig, RuleConfigSeverity } from "@commitlint/types";

export default {
  rules: {
    "type-empty": [
      RuleConfigSeverity.Error,
      "never",
    ],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "refactor",
        "test",
        "chore",
        "revert",
        "ci",
        "docs",
        "build",
        "release",
        "deps",
        "config",
        "security",
        "breaking",
        "wip",
        "types",
        "lint",
        "workflow",
        "deploy",
        "infra",
        "data",
        "db",
        "api",
        "app",
        "ui",
      ],
    ],
    "subject-empty": [
      RuleConfigSeverity.Error,
      "never",
    ],
    "subject-case": [
      RuleConfigSeverity.Error,
      "always",
      ["sentence-case"],
    ],
  },
} as UserConfig;
