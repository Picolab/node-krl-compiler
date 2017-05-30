module.exports = {
  "rid": "io.picolabs.event-exp",
  "rules": {
    "before": {
      "name": "before",
      "select": {
        "graph": {
          "ee_before": {
            "a": { "expr_0": true },
            "b": { "expr_1": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_1",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["before"]);
            }
          }]
      }
    },
    "after": {
      "name": "after",
      "select": {
        "graph": {
          "ee_after": {
            "a": { "expr_0": true },
            "b": { "expr_1": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_1",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["after"]);
            }
          }]
      }
    },
    "then": {
      "name": "then",
      "select": {
        "graph": {
          "ee_then": {
            "a": { "expr_0": true },
            "b": { "expr_1": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "name",
                  new RegExp("bob", "")
                ]]]);
            if (!matches)
              return false;
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [
            [
              "expr_1",
              "end"
            ],
            [
              [
                "not",
                "expr_1"
              ],
              "start"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["then"]);
            }
          }]
      }
    },
    "and": {
      "name": "and",
      "select": {
        "graph": {
          "ee_and": {
            "a": { "expr_0": true },
            "b": { "expr_1": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "s0"
            ],
            [
              "expr_1",
              "s1"
            ]
          ],
          "s0": [[
              "expr_1",
              "end"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["and"]);
            }
          }]
      }
    },
    "or": {
      "name": "or",
      "select": {
        "graph": {
          "ee_or": {
            "a": { "expr_0": true },
            "b": { "expr_1": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "end"
            ],
            [
              "expr_1",
              "end"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["or"]);
            }
          }]
      }
    },
    "between": {
      "name": "between",
      "select": {
        "graph": {
          "ee_between": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_1",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_2",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["between"]);
            }
          }]
      }
    },
    "not_between": {
      "name": "not_between",
      "select": {
        "graph": {
          "ee_not_between": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_1",
              "s0"
            ]],
          "s0": [
            [
              "expr_0",
              "start"
            ],
            [
              "expr_2",
              "end"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["not between"]);
            }
          }]
      }
    },
    "and_or": {
      "name": "and_or",
      "select": {
        "graph": {
          "ee_andor": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "s0"
            ],
            [
              "expr_1",
              "s1"
            ],
            [
              "expr_2",
              "end"
            ]
          ],
          "s0": [[
              "expr_1",
              "end"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["(a and b) or c"]);
            }
          }]
      }
    },
    "or_and": {
      "name": "or_and",
      "select": {
        "graph": {
          "ee_orand": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "s0"
            ],
            [
              "expr_1",
              "s1"
            ],
            [
              "expr_2",
              "s1"
            ]
          ],
          "s0": [
            [
              "expr_1",
              "end"
            ],
            [
              "expr_2",
              "end"
            ]
          ],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["a and (b or c)"]);
            }
          }]
      }
    },
    "before_n": {
      "name": "before_n",
      "select": {
        "graph": {
          "ee_before_n": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_1",
              "s1"
            ]],
          "s1": [[
              "expr_2",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["before_n"]);
            }
          }]
      }
    },
    "after_n": {
      "name": "after_n",
      "select": {
        "graph": {
          "ee_after_n": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_2",
              "s0"
            ]],
          "s0": [[
              "expr_1",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["after_n"]);
            }
          }]
      }
    },
    "then_n": {
      "name": "then_n",
      "select": {
        "graph": {
          "ee_then_n": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [
            [
              "expr_1",
              "s1"
            ],
            [
              [
                "not",
                "expr_1"
              ],
              "start"
            ]
          ],
          "s1": [
            [
              "expr_2",
              "end"
            ],
            [
              [
                "not",
                "expr_2"
              ],
              "start"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["then_n"]);
            }
          }]
      }
    },
    "and_n": {
      "name": "and_n",
      "select": {
        "graph": {
          "ee_and_n": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "s0"
            ],
            [
              "expr_1",
              "s1"
            ],
            [
              "expr_2",
              "s4"
            ]
          ],
          "s0": [
            [
              "expr_1",
              "s7"
            ],
            [
              "expr_2",
              "s8"
            ]
          ],
          "s1": [
            [
              "expr_0",
              "s2"
            ],
            [
              "expr_2",
              "s3"
            ]
          ],
          "s2": [[
              "expr_2",
              "end"
            ]],
          "s3": [[
              "expr_0",
              "end"
            ]],
          "s4": [
            [
              "expr_0",
              "s5"
            ],
            [
              "expr_1",
              "s6"
            ]
          ],
          "s5": [[
              "expr_1",
              "end"
            ]],
          "s6": [[
              "expr_0",
              "end"
            ]],
          "s7": [[
              "expr_2",
              "end"
            ]],
          "s8": [[
              "expr_1",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["and_n"]);
            }
          }]
      }
    },
    "or_n": {
      "name": "or_n",
      "select": {
        "graph": {
          "ee_or_n": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true },
            "d": { "expr_3": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_3": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "end"
            ],
            [
              "expr_1",
              "end"
            ],
            [
              "expr_2",
              "end"
            ],
            [
              "expr_3",
              "end"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["or_n"]);
            }
          }]
      }
    },
    "any": {
      "name": "any",
      "select": {
        "graph": {
          "ee_any": {
            "a": { "expr_0": true },
            "b": { "expr_1": true },
            "c": { "expr_2": true },
            "d": { "expr_3": true }
          }
        },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_1": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_2": function* (ctx, aggregateEvent) {
            return true;
          },
          "expr_3": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [
            [
              "expr_0",
              "s0"
            ],
            [
              "expr_1",
              "s1"
            ],
            [
              "expr_2",
              "s2"
            ],
            [
              "expr_3",
              "s3"
            ]
          ],
          "s0": [
            [
              "expr_1",
              "end"
            ],
            [
              "expr_2",
              "end"
            ],
            [
              "expr_3",
              "end"
            ]
          ],
          "s1": [
            [
              "expr_0",
              "end"
            ],
            [
              "expr_2",
              "end"
            ],
            [
              "expr_3",
              "end"
            ]
          ],
          "s2": [
            [
              "expr_0",
              "end"
            ],
            [
              "expr_1",
              "end"
            ],
            [
              "expr_3",
              "end"
            ]
          ],
          "s3": [
            [
              "expr_0",
              "end"
            ],
            [
              "expr_1",
              "end"
            ],
            [
              "expr_2",
              "end"
            ]
          ]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["any"]);
            }
          }]
      }
    },
    "count": {
      "name": "count",
      "select": {
        "graph": { "ee_count": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["count"]);
            }
          }]
      }
    },
    "repeat": {
      "name": "repeat",
      "select": {
        "graph": { "ee_repeat": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "name",
                  new RegExp("bob", "")
                ]]]);
            if (!matches)
              return false;
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", ["repeat"]);
            }
          }]
      }
    },
    "count_max": {
      "name": "count_max",
      "select": {
        "graph": { "ee_count_max": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "b",
                  new RegExp("(\\d+)", "")
                ]]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "max", [[
                "m",
                matches[0]
              ]]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "count_max",
                { "m": ctx.scope.get("m") }
              ]);
            }
          }]
      }
    },
    "repeat_min": {
      "name": "repeat_min",
      "select": {
        "graph": { "ee_repeat_min": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "b",
                  new RegExp("(\\d+)", "")
                ]]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "min", [[
                "m",
                matches[0]
              ]]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_min",
                { "m": ctx.scope.get("m") }
              ]);
            }
          }]
      }
    },
    "repeat_sum": {
      "name": "repeat_sum",
      "select": {
        "graph": { "ee_repeat_sum": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "b",
                  new RegExp("(\\d+)", "")
                ]]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "sum", [[
                "m",
                matches[0]
              ]]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_sum",
                { "m": ctx.scope.get("m") }
              ]);
            }
          }]
      }
    },
    "repeat_avg": {
      "name": "repeat_avg",
      "select": {
        "graph": { "ee_repeat_avg": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "b",
                  new RegExp("(\\d+)", "")
                ]]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "avg", [[
                "m",
                matches[0]
              ]]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_avg",
                { "m": ctx.scope.get("m") }
              ]);
            }
          }]
      }
    },
    "repeat_push": {
      "name": "repeat_push",
      "select": {
        "graph": { "ee_repeat_push": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[[
                  "b",
                  new RegExp("(\\d+)", "")
                ]]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "push", [[
                "m",
                matches[0]
              ]]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_push",
                { "m": ctx.scope.get("m") }
              ]);
            }
          }]
      }
    },
    "repeat_push_multi": {
      "name": "repeat_push_multi",
      "select": {
        "graph": { "ee_repeat_push_multi": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[
                [
                  "a",
                  new RegExp("(\\d+)", "")
                ],
                [
                  "b",
                  new RegExp("(\\d+) (.*)", "")
                ]
              ]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "push", [
              [
                "a",
                matches[0]
              ],
              [
                "b",
                matches[1]
              ],
              [
                "c",
                matches[2]
              ],
              [
                "d",
                matches[3]
              ]
            ]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "s2"
            ]],
          "s2": [[
              "expr_0",
              "s3"
            ]],
          "s3": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_push_multi",
                {
                  "a": ctx.scope.get("a"),
                  "b": ctx.scope.get("b"),
                  "c": ctx.scope.get("c"),
                  "d": ctx.scope.get("d")
                }
              ]);
            }
          }]
      }
    },
    "repeat_sum_multi": {
      "name": "repeat_sum_multi",
      "select": {
        "graph": { "ee_repeat_sum_multi": { "a": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx, aggregateEvent) {
            var matches = yield ctx.applyFn(yield ctx.modules.get(ctx, "event", "attrMatches"), ctx, [[
                [
                  "a",
                  new RegExp("(\\d+)", "")
                ],
                [
                  "b",
                  new RegExp("(\\d+)", "")
                ]
              ]]);
            if (!matches)
              return false;
            yield aggregateEvent(ctx, "sum", [
              [
                "a",
                matches[0]
              ],
              [
                "b",
                matches[1]
              ]
            ]);
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "s0"
            ]],
          "s0": [[
              "expr_0",
              "s1"
            ]],
          "s1": [[
              "expr_0",
              "end"
            ]],
          "end": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx, runAction) {
              var returns = yield runAction(ctx, void 0, "send_directive", [
                "repeat_sum_multi",
                {
                  "a": ctx.scope.get("a"),
                  "b": ctx.scope.get("b")
                }
              ]);
            }
          }]
      }
    }
  }
};