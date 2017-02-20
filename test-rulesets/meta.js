module.exports = {
  "rid": "io.picolabs.meta",
  "meta": {
    "name": "testing meta module",
    "shares": ["eci"]
  },
  "global": function* (ctx) {
    ctx.scope.set("eci", yield ctx.KRLClosure(ctx, function* (ctx) {
      return yield ctx.modules.get(ctx, "meta", "eci");
    }));
  },
  "rules": {
    "test_meta": {
      "name": "test_meta",
      "select": {
        "graph": { "meta": { "eci": { "expr_0": true } } },
        "eventexprs": {
          "expr_0": function* (ctx) {
            return true;
          }
        },
        "state_machine": {
          "start": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "action_block": {
        "actions": [{
            "action": function* (ctx) {
              return {
                "type": "directive",
                "name": "eci",
                "options": { "eci": yield ctx.modules.get(ctx, "meta", "eci") }
              };
            }
          }]
      }
    }
  }
};