"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _conversations = require("../controller/conversations.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// backend/routes/conversation.js
var router = _express["default"].Router(); // Route to find or create a conversation between two users


router.get("/findOrCreate/:userId1/:userId2", _conversations.findOrCreateConversation); // Route to get a specific conversation by ID

router.get("/:conversationId", _conversations.getConversation); // Route to get all conversations of a specific user

router.get("/:userId", _conversations.getUserConversations);
var _default = router;
exports["default"] = _default;