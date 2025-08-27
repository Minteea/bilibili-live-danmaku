/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const bilibili = ($root.bilibili = (() => {
  /**
   * Namespace bilibili.
   * @exports bilibili
   * @namespace
   */
  const bilibili = {};

  bilibili.live = (function () {
    /**
     * Namespace live.
     * @memberof bilibili
     * @namespace
     */
    const live = {};

    live.component = (function () {
      /**
       * Namespace component.
       * @memberof bilibili.live
       * @namespace
       */
      const component = {};

      component.common_model = (function () {
        /**
         * Namespace common_model.
         * @memberof bilibili.live.component
         * @namespace
         */
        const common_model = {};

        common_model.fans_club = (function () {
          /**
           * Namespace fans_club.
           * @memberof bilibili.live.component.common_model
           * @namespace
           */
          const fans_club = {};

          fans_club.GroupMedalBrief = (function () {
            /**
             * Properties of a GroupMedalBrief.
             * @memberof bilibili.live.component.common_model.fans_club
             * @interface IGroupMedalBrief
             * @property {number|null} [medalId] GroupMedalBrief medalId
             * @property {string|null} [name] GroupMedalBrief name
             * @property {number|null} [isLighted] GroupMedalBrief isLighted
             */

            /**
             * Constructs a new GroupMedalBrief.
             * @memberof bilibili.live.component.common_model.fans_club
             * @classdesc Represents a GroupMedalBrief.
             * @implements IGroupMedalBrief
             * @constructor
             * @param {bilibili.live.component.common_model.fans_club.IGroupMedalBrief=} [properties] Properties to set
             */
            function GroupMedalBrief(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * GroupMedalBrief medalId.
             * @member {number} medalId
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @instance
             */
            GroupMedalBrief.prototype.medalId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GroupMedalBrief name.
             * @member {string} name
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @instance
             */
            GroupMedalBrief.prototype.name = "";

            /**
             * GroupMedalBrief isLighted.
             * @member {number} isLighted
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @instance
             */
            GroupMedalBrief.prototype.isLighted = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new GroupMedalBrief instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {bilibili.live.component.common_model.fans_club.IGroupMedalBrief=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.fans_club.GroupMedalBrief} GroupMedalBrief instance
             */
            GroupMedalBrief.create = function create(properties) {
              return new GroupMedalBrief(properties);
            };

            /**
             * Encodes the specified GroupMedalBrief message. Does not implicitly {@link bilibili.live.component.common_model.fans_club.GroupMedalBrief.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {bilibili.live.component.common_model.fans_club.IGroupMedalBrief} message GroupMedalBrief message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupMedalBrief.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.medalId != null &&
                Object.hasOwnProperty.call(message, "medalId")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.medalId);
              if (
                message.name != null &&
                Object.hasOwnProperty.call(message, "name")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
              if (
                message.isLighted != null &&
                Object.hasOwnProperty.call(message, "isLighted")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .int64(message.isLighted);
              return writer;
            };

            /**
             * Encodes the specified GroupMedalBrief message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.fans_club.GroupMedalBrief.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {bilibili.live.component.common_model.fans_club.IGroupMedalBrief} message GroupMedalBrief message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupMedalBrief.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GroupMedalBrief message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.fans_club.GroupMedalBrief} GroupMedalBrief
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupMedalBrief.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.medalId = reader.int64();
                    break;
                  }
                  case 2: {
                    message.name = reader.string();
                    break;
                  }
                  case 3: {
                    message.isLighted = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a GroupMedalBrief message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.fans_club.GroupMedalBrief} GroupMedalBrief
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupMedalBrief.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupMedalBrief message.
             * @function verify
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupMedalBrief.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.medalId != null && message.hasOwnProperty("medalId"))
                if (
                  !$util.isInteger(message.medalId) &&
                  !(
                    message.medalId &&
                    $util.isInteger(message.medalId.low) &&
                    $util.isInteger(message.medalId.high)
                  )
                )
                  return "medalId: integer|Long expected";
              if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                  return "name: string expected";
              if (
                message.isLighted != null &&
                message.hasOwnProperty("isLighted")
              )
                if (
                  !$util.isInteger(message.isLighted) &&
                  !(
                    message.isLighted &&
                    $util.isInteger(message.isLighted.low) &&
                    $util.isInteger(message.isLighted.high)
                  )
                )
                  return "isLighted: integer|Long expected";
              return null;
            };

            /**
             * Creates a GroupMedalBrief message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.fans_club.GroupMedalBrief} GroupMedalBrief
             */
            GroupMedalBrief.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.fans_club
                  .GroupMedalBrief
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief();
              if (object.medalId != null)
                if ($util.Long)
                  (message.medalId = $util.Long.fromValue(
                    object.medalId
                  )).unsigned = false;
                else if (typeof object.medalId === "string")
                  message.medalId = parseInt(object.medalId, 10);
                else if (typeof object.medalId === "number")
                  message.medalId = object.medalId;
                else if (typeof object.medalId === "object")
                  message.medalId = new $util.LongBits(
                    object.medalId.low >>> 0,
                    object.medalId.high >>> 0
                  ).toNumber();
              if (object.name != null) message.name = String(object.name);
              if (object.isLighted != null)
                if ($util.Long)
                  (message.isLighted = $util.Long.fromValue(
                    object.isLighted
                  )).unsigned = false;
                else if (typeof object.isLighted === "string")
                  message.isLighted = parseInt(object.isLighted, 10);
                else if (typeof object.isLighted === "number")
                  message.isLighted = object.isLighted;
                else if (typeof object.isLighted === "object")
                  message.isLighted = new $util.LongBits(
                    object.isLighted.low >>> 0,
                    object.isLighted.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a GroupMedalBrief message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {bilibili.live.component.common_model.fans_club.GroupMedalBrief} message GroupMedalBrief
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupMedalBrief.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.medalId = options.longs === String ? "0" : 0;
                object.name = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.isLighted =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.isLighted = options.longs === String ? "0" : 0;
              }
              if (message.medalId != null && message.hasOwnProperty("medalId"))
                if (typeof message.medalId === "number")
                  object.medalId =
                    options.longs === String
                      ? String(message.medalId)
                      : message.medalId;
                else
                  object.medalId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.medalId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalId.low >>> 0,
                          message.medalId.high >>> 0
                        ).toNumber()
                      : message.medalId;
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (
                message.isLighted != null &&
                message.hasOwnProperty("isLighted")
              )
                if (typeof message.isLighted === "number")
                  object.isLighted =
                    options.longs === String
                      ? String(message.isLighted)
                      : message.isLighted;
                else
                  object.isLighted =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.isLighted)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.isLighted.low >>> 0,
                          message.isLighted.high >>> 0
                        ).toNumber()
                      : message.isLighted;
              return object;
            };

            /**
             * Converts this GroupMedalBrief to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupMedalBrief.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for GroupMedalBrief
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.fans_club.GroupMedalBrief
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GroupMedalBrief.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.fans_club.GroupMedalBrief"
              );
            };

            return GroupMedalBrief;
          })();

          return fans_club;
        })();

        common_model.user_dagw = (function () {
          /**
           * Namespace user_dagw.
           * @memberof bilibili.live.component.common_model
           * @namespace
           */
          const user_dagw = {};

          user_dagw.AccountInfo = (function () {
            /**
             * Properties of an AccountInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IAccountInfo
             * @property {string|null} [name] AccountInfo name
             * @property {string|null} [face] AccountInfo face
             */

            /**
             * Constructs a new AccountInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents an AccountInfo.
             * @implements IAccountInfo
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IAccountInfo=} [properties] Properties to set
             */
            function AccountInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * AccountInfo name.
             * @member {string} name
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @instance
             */
            AccountInfo.prototype.name = "";

            /**
             * AccountInfo face.
             * @member {string} face
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @instance
             */
            AccountInfo.prototype.face = "";

            /**
             * Creates a new AccountInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IAccountInfo=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.AccountInfo} AccountInfo instance
             */
            AccountInfo.create = function create(properties) {
              return new AccountInfo(properties);
            };

            /**
             * Encodes the specified AccountInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.AccountInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IAccountInfo} message AccountInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.name != null &&
                Object.hasOwnProperty.call(message, "name")
              )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
              if (
                message.face != null &&
                Object.hasOwnProperty.call(message, "face")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.face);
              return writer;
            };

            /**
             * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.AccountInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IAccountInfo} message AccountInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AccountInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.AccountInfo} AccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.AccountInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.face = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.AccountInfo} AccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AccountInfo message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                  return "name: string expected";
              if (message.face != null && message.hasOwnProperty("face"))
                if (!$util.isString(message.face))
                  return "face: string expected";
              return null;
            };

            /**
             * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.AccountInfo} AccountInfo
             */
            AccountInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.AccountInfo
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.AccountInfo();
              if (object.name != null) message.name = String(object.name);
              if (object.face != null) message.face = String(object.face);
              return message;
            };

            /**
             * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.AccountInfo} message AccountInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.name = "";
                object.face = "";
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.face != null && message.hasOwnProperty("face"))
                object.face = message.face;
              return object;
            };

            /**
             * Converts this AccountInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for AccountInfo
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.AccountInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AccountInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.AccountInfo"
              );
            };

            return AccountInfo;
          })();

          user_dagw.Base = (function () {
            /**
             * Properties of a Base.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IBase
             * @property {string|null} [name] Base name
             * @property {string|null} [face] Base face
             * @property {number|null} [nameColor] Base nameColor
             * @property {boolean|null} [isMystery] Base isMystery
             * @property {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo|null} [riskCtrlInfo] Base riskCtrlInfo
             * @property {bilibili.live.component.common_model.user_dagw.IAccountInfo|null} [originInfo] Base originInfo
             * @property {bilibili.live.component.common_model.user_dagw.IOfficialInfo|null} [officialInfo] Base officialInfo
             * @property {string|null} [nameColorStr] Base nameColorStr
             */

            /**
             * Constructs a new Base.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a Base.
             * @implements IBase
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IBase=} [properties] Properties to set
             */
            function Base(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * Base name.
             * @member {string} name
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.name = "";

            /**
             * Base face.
             * @member {string} face
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.face = "";

            /**
             * Base nameColor.
             * @member {number} nameColor
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.nameColor = 0;

            /**
             * Base isMystery.
             * @member {boolean} isMystery
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.isMystery = false;

            /**
             * Base riskCtrlInfo.
             * @member {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo|null|undefined} riskCtrlInfo
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.riskCtrlInfo = null;

            /**
             * Base originInfo.
             * @member {bilibili.live.component.common_model.user_dagw.IAccountInfo|null|undefined} originInfo
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.originInfo = null;

            /**
             * Base officialInfo.
             * @member {bilibili.live.component.common_model.user_dagw.IOfficialInfo|null|undefined} officialInfo
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.officialInfo = null;

            /**
             * Base nameColorStr.
             * @member {string} nameColorStr
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             */
            Base.prototype.nameColorStr = "";

            /**
             * Creates a new Base instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBase=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.Base} Base instance
             */
            Base.create = function create(properties) {
              return new Base(properties);
            };

            /**
             * Encodes the specified Base message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Base.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBase} message Base message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Base.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.name != null &&
                Object.hasOwnProperty.call(message, "name")
              )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
              if (
                message.face != null &&
                Object.hasOwnProperty.call(message, "face")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.face);
              if (
                message.nameColor != null &&
                Object.hasOwnProperty.call(message, "nameColor")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .int32(message.nameColor);
              if (
                message.isMystery != null &&
                Object.hasOwnProperty.call(message, "isMystery")
              )
                writer
                  .uint32(/* id 4, wireType 0 =*/ 32)
                  .bool(message.isMystery);
              if (
                message.riskCtrlInfo != null &&
                Object.hasOwnProperty.call(message, "riskCtrlInfo")
              )
                $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.encode(
                  message.riskCtrlInfo,
                  writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
                ).ldelim();
              if (
                message.originInfo != null &&
                Object.hasOwnProperty.call(message, "originInfo")
              )
                $root.bilibili.live.component.common_model.user_dagw.AccountInfo.encode(
                  message.originInfo,
                  writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                ).ldelim();
              if (
                message.officialInfo != null &&
                Object.hasOwnProperty.call(message, "officialInfo")
              )
                $root.bilibili.live.component.common_model.user_dagw.OfficialInfo.encode(
                  message.officialInfo,
                  writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
                ).ldelim();
              if (
                message.nameColorStr != null &&
                Object.hasOwnProperty.call(message, "nameColorStr")
              )
                writer
                  .uint32(/* id 8, wireType 2 =*/ 66)
                  .string(message.nameColorStr);
              return writer;
            };

            /**
             * Encodes the specified Base message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Base.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBase} message Base message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Base.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Base message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.Base} Base
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Base.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.Base();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.face = reader.string();
                    break;
                  }
                  case 3: {
                    message.nameColor = reader.int32();
                    break;
                  }
                  case 4: {
                    message.isMystery = reader.bool();
                    break;
                  }
                  case 5: {
                    message.riskCtrlInfo =
                      $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 6: {
                    message.originInfo =
                      $root.bilibili.live.component.common_model.user_dagw.AccountInfo.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 7: {
                    message.officialInfo =
                      $root.bilibili.live.component.common_model.user_dagw.OfficialInfo.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 8: {
                    message.nameColorStr = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a Base message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.Base} Base
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Base.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Base message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Base.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                  return "name: string expected";
              if (message.face != null && message.hasOwnProperty("face"))
                if (!$util.isString(message.face))
                  return "face: string expected";
              if (
                message.nameColor != null &&
                message.hasOwnProperty("nameColor")
              )
                if (!$util.isInteger(message.nameColor))
                  return "nameColor: integer expected";
              if (
                message.isMystery != null &&
                message.hasOwnProperty("isMystery")
              )
                if (typeof message.isMystery !== "boolean")
                  return "isMystery: boolean expected";
              if (
                message.riskCtrlInfo != null &&
                message.hasOwnProperty("riskCtrlInfo")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.verify(
                    message.riskCtrlInfo
                  );
                if (error) return "riskCtrlInfo." + error;
              }
              if (
                message.originInfo != null &&
                message.hasOwnProperty("originInfo")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.AccountInfo.verify(
                    message.originInfo
                  );
                if (error) return "originInfo." + error;
              }
              if (
                message.officialInfo != null &&
                message.hasOwnProperty("officialInfo")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.OfficialInfo.verify(
                    message.officialInfo
                  );
                if (error) return "officialInfo." + error;
              }
              if (
                message.nameColorStr != null &&
                message.hasOwnProperty("nameColorStr")
              )
                if (!$util.isString(message.nameColorStr))
                  return "nameColorStr: string expected";
              return null;
            };

            /**
             * Creates a Base message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.Base} Base
             */
            Base.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.Base
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.Base();
              if (object.name != null) message.name = String(object.name);
              if (object.face != null) message.face = String(object.face);
              if (object.nameColor != null)
                message.nameColor = object.nameColor | 0;
              if (object.isMystery != null)
                message.isMystery = Boolean(object.isMystery);
              if (object.riskCtrlInfo != null) {
                if (typeof object.riskCtrlInfo !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.Base.riskCtrlInfo: object expected"
                  );
                message.riskCtrlInfo =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.fromObject(
                    object.riskCtrlInfo
                  );
              }
              if (object.originInfo != null) {
                if (typeof object.originInfo !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.Base.originInfo: object expected"
                  );
                message.originInfo =
                  $root.bilibili.live.component.common_model.user_dagw.AccountInfo.fromObject(
                    object.originInfo
                  );
              }
              if (object.officialInfo != null) {
                if (typeof object.officialInfo !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.Base.officialInfo: object expected"
                  );
                message.officialInfo =
                  $root.bilibili.live.component.common_model.user_dagw.OfficialInfo.fromObject(
                    object.officialInfo
                  );
              }
              if (object.nameColorStr != null)
                message.nameColorStr = String(object.nameColorStr);
              return message;
            };

            /**
             * Creates a plain object from a Base message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.Base} message Base
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Base.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.name = "";
                object.face = "";
                object.nameColor = 0;
                object.isMystery = false;
                object.riskCtrlInfo = null;
                object.originInfo = null;
                object.officialInfo = null;
                object.nameColorStr = "";
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.face != null && message.hasOwnProperty("face"))
                object.face = message.face;
              if (
                message.nameColor != null &&
                message.hasOwnProperty("nameColor")
              )
                object.nameColor = message.nameColor;
              if (
                message.isMystery != null &&
                message.hasOwnProperty("isMystery")
              )
                object.isMystery = message.isMystery;
              if (
                message.riskCtrlInfo != null &&
                message.hasOwnProperty("riskCtrlInfo")
              )
                object.riskCtrlInfo =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.toObject(
                    message.riskCtrlInfo,
                    options
                  );
              if (
                message.originInfo != null &&
                message.hasOwnProperty("originInfo")
              )
                object.originInfo =
                  $root.bilibili.live.component.common_model.user_dagw.AccountInfo.toObject(
                    message.originInfo,
                    options
                  );
              if (
                message.officialInfo != null &&
                message.hasOwnProperty("officialInfo")
              )
                object.officialInfo =
                  $root.bilibili.live.component.common_model.user_dagw.OfficialInfo.toObject(
                    message.officialInfo,
                    options
                  );
              if (
                message.nameColorStr != null &&
                message.hasOwnProperty("nameColorStr")
              )
                object.nameColorStr = message.nameColorStr;
              return object;
            };

            /**
             * Converts this Base to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Base.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for Base
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.Base
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Base.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.Base"
              );
            };

            return Base;
          })();

          user_dagw.BaseOption = (function () {
            /**
             * Properties of a BaseOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IBaseOption
             * @property {boolean|null} [needMystery] BaseOption needMystery
             * @property {bilibili.live.component.common_model.user_dagw.IRiskCtrl|null} [riskCtrl] BaseOption riskCtrl
             * @property {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl|null} [roomAnonCtrl] BaseOption roomAnonCtrl
             * @property {Array.<number>|null} [riskCtrlHandles] BaseOption riskCtrlHandles
             */

            /**
             * Constructs a new BaseOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a BaseOption.
             * @implements IBaseOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IBaseOption=} [properties] Properties to set
             */
            function BaseOption(properties) {
              this.riskCtrlHandles = [];
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * BaseOption needMystery.
             * @member {boolean} needMystery
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @instance
             */
            BaseOption.prototype.needMystery = false;

            /**
             * BaseOption riskCtrl.
             * @member {bilibili.live.component.common_model.user_dagw.IRiskCtrl|null|undefined} riskCtrl
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @instance
             */
            BaseOption.prototype.riskCtrl = null;

            /**
             * BaseOption roomAnonCtrl.
             * @member {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl|null|undefined} roomAnonCtrl
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @instance
             */
            BaseOption.prototype.roomAnonCtrl = null;

            /**
             * BaseOption riskCtrlHandles.
             * @member {Array.<number>} riskCtrlHandles
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @instance
             */
            BaseOption.prototype.riskCtrlHandles = $util.emptyArray;

            /**
             * Creates a new BaseOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBaseOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.BaseOption} BaseOption instance
             */
            BaseOption.create = function create(properties) {
              return new BaseOption(properties);
            };

            /**
             * Encodes the specified BaseOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.BaseOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBaseOption} message BaseOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BaseOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.needMystery != null &&
                Object.hasOwnProperty.call(message, "needMystery")
              )
                writer
                  .uint32(/* id 1, wireType 0 =*/ 8)
                  .bool(message.needMystery);
              if (
                message.riskCtrl != null &&
                Object.hasOwnProperty.call(message, "riskCtrl")
              )
                $root.bilibili.live.component.common_model.user_dagw.RiskCtrl.encode(
                  message.riskCtrl,
                  writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                ).ldelim();
              if (
                message.roomAnonCtrl != null &&
                Object.hasOwnProperty.call(message, "roomAnonCtrl")
              )
                $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.encode(
                  message.roomAnonCtrl,
                  writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                ).ldelim();
              if (
                message.riskCtrlHandles != null &&
                message.riskCtrlHandles.length
              ) {
                writer.uint32(/* id 4, wireType 2 =*/ 34).fork();
                for (let i = 0; i < message.riskCtrlHandles.length; ++i)
                  writer.int32(message.riskCtrlHandles[i]);
                writer.ldelim();
              }
              return writer;
            };

            /**
             * Encodes the specified BaseOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.BaseOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IBaseOption} message BaseOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BaseOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BaseOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.BaseOption} BaseOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BaseOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.BaseOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.needMystery = reader.bool();
                    break;
                  }
                  case 2: {
                    message.riskCtrl =
                      $root.bilibili.live.component.common_model.user_dagw.RiskCtrl.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 3: {
                    message.roomAnonCtrl =
                      $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 4: {
                    if (
                      !(
                        message.riskCtrlHandles &&
                        message.riskCtrlHandles.length
                      )
                    )
                      message.riskCtrlHandles = [];
                    if ((tag & 7) === 2) {
                      let end2 = reader.uint32() + reader.pos;
                      while (reader.pos < end2)
                        message.riskCtrlHandles.push(reader.int32());
                    } else message.riskCtrlHandles.push(reader.int32());
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a BaseOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.BaseOption} BaseOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BaseOption.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BaseOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BaseOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (
                message.needMystery != null &&
                message.hasOwnProperty("needMystery")
              )
                if (typeof message.needMystery !== "boolean")
                  return "needMystery: boolean expected";
              if (
                message.riskCtrl != null &&
                message.hasOwnProperty("riskCtrl")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrl.verify(
                    message.riskCtrl
                  );
                if (error) return "riskCtrl." + error;
              }
              if (
                message.roomAnonCtrl != null &&
                message.hasOwnProperty("roomAnonCtrl")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.verify(
                    message.roomAnonCtrl
                  );
                if (error) return "roomAnonCtrl." + error;
              }
              if (
                message.riskCtrlHandles != null &&
                message.hasOwnProperty("riskCtrlHandles")
              ) {
                if (!Array.isArray(message.riskCtrlHandles))
                  return "riskCtrlHandles: array expected";
                for (let i = 0; i < message.riskCtrlHandles.length; ++i)
                  if (!$util.isInteger(message.riskCtrlHandles[i]))
                    return "riskCtrlHandles: integer[] expected";
              }
              return null;
            };

            /**
             * Creates a BaseOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.BaseOption} BaseOption
             */
            BaseOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.BaseOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.BaseOption();
              if (object.needMystery != null)
                message.needMystery = Boolean(object.needMystery);
              if (object.riskCtrl != null) {
                if (typeof object.riskCtrl !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.BaseOption.riskCtrl: object expected"
                  );
                message.riskCtrl =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrl.fromObject(
                    object.riskCtrl
                  );
              }
              if (object.roomAnonCtrl != null) {
                if (typeof object.roomAnonCtrl !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.BaseOption.roomAnonCtrl: object expected"
                  );
                message.roomAnonCtrl =
                  $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.fromObject(
                    object.roomAnonCtrl
                  );
              }
              if (object.riskCtrlHandles) {
                if (!Array.isArray(object.riskCtrlHandles))
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.BaseOption.riskCtrlHandles: array expected"
                  );
                message.riskCtrlHandles = [];
                for (let i = 0; i < object.riskCtrlHandles.length; ++i)
                  message.riskCtrlHandles[i] = object.riskCtrlHandles[i] | 0;
              }
              return message;
            };

            /**
             * Creates a plain object from a BaseOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.BaseOption} message BaseOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BaseOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.arrays || options.defaults)
                object.riskCtrlHandles = [];
              if (options.defaults) {
                object.needMystery = false;
                object.riskCtrl = null;
                object.roomAnonCtrl = null;
              }
              if (
                message.needMystery != null &&
                message.hasOwnProperty("needMystery")
              )
                object.needMystery = message.needMystery;
              if (
                message.riskCtrl != null &&
                message.hasOwnProperty("riskCtrl")
              )
                object.riskCtrl =
                  $root.bilibili.live.component.common_model.user_dagw.RiskCtrl.toObject(
                    message.riskCtrl,
                    options
                  );
              if (
                message.roomAnonCtrl != null &&
                message.hasOwnProperty("roomAnonCtrl")
              )
                object.roomAnonCtrl =
                  $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.toObject(
                    message.roomAnonCtrl,
                    options
                  );
              if (message.riskCtrlHandles && message.riskCtrlHandles.length) {
                object.riskCtrlHandles = [];
                for (let j = 0; j < message.riskCtrlHandles.length; ++j)
                  object.riskCtrlHandles[j] = message.riskCtrlHandles[j];
              }
              return object;
            };

            /**
             * Converts this BaseOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BaseOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for BaseOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.BaseOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BaseOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.BaseOption"
              );
            };

            return BaseOption;
          })();

          user_dagw.Guard = (function () {
            /**
             * Properties of a Guard.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IGuard
             * @property {number|null} [level] Guard level
             * @property {string|null} [expiredStr] Guard expiredStr
             */

            /**
             * Constructs a new Guard.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a Guard.
             * @implements IGuard
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IGuard=} [properties] Properties to set
             */
            function Guard(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * Guard level.
             * @member {number} level
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @instance
             */
            Guard.prototype.level = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Guard expiredStr.
             * @member {string} expiredStr
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @instance
             */
            Guard.prototype.expiredStr = "";

            /**
             * Creates a new Guard instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuard=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.Guard} Guard instance
             */
            Guard.create = function create(properties) {
              return new Guard(properties);
            };

            /**
             * Encodes the specified Guard message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Guard.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuard} message Guard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Guard.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.level != null &&
                Object.hasOwnProperty.call(message, "level")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.level);
              if (
                message.expiredStr != null &&
                Object.hasOwnProperty.call(message, "expiredStr")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.expiredStr);
              return writer;
            };

            /**
             * Encodes the specified Guard message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Guard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuard} message Guard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Guard.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Guard message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.Guard} Guard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Guard.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.Guard();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.level = reader.int64();
                    break;
                  }
                  case 2: {
                    message.expiredStr = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a Guard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.Guard} Guard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Guard.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Guard message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Guard.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.level != null && message.hasOwnProperty("level"))
                if (
                  !$util.isInteger(message.level) &&
                  !(
                    message.level &&
                    $util.isInteger(message.level.low) &&
                    $util.isInteger(message.level.high)
                  )
                )
                  return "level: integer|Long expected";
              if (
                message.expiredStr != null &&
                message.hasOwnProperty("expiredStr")
              )
                if (!$util.isString(message.expiredStr))
                  return "expiredStr: string expected";
              return null;
            };

            /**
             * Creates a Guard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.Guard} Guard
             */
            Guard.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.Guard
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.Guard();
              if (object.level != null)
                if ($util.Long)
                  (message.level = $util.Long.fromValue(
                    object.level
                  )).unsigned = false;
                else if (typeof object.level === "string")
                  message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                  message.level = object.level;
                else if (typeof object.level === "object")
                  message.level = new $util.LongBits(
                    object.level.low >>> 0,
                    object.level.high >>> 0
                  ).toNumber();
              if (object.expiredStr != null)
                message.expiredStr = String(object.expiredStr);
              return message;
            };

            /**
             * Creates a plain object from a Guard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.Guard} message Guard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Guard.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.level =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.level = options.longs === String ? "0" : 0;
                object.expiredStr = "";
              }
              if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                  object.level =
                    options.longs === String
                      ? String(message.level)
                      : message.level;
                else
                  object.level =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.level)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.level.low >>> 0,
                          message.level.high >>> 0
                        ).toNumber()
                      : message.level;
              if (
                message.expiredStr != null &&
                message.hasOwnProperty("expiredStr")
              )
                object.expiredStr = message.expiredStr;
              return object;
            };

            /**
             * Converts this Guard to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Guard.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for Guard
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.Guard
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Guard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.Guard"
              );
            };

            return Guard;
          })();

          user_dagw.GuardLeader = (function () {
            /**
             * Properties of a GuardLeader.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IGuardLeader
             * @property {boolean|null} [isGuardLeader] GuardLeader isGuardLeader
             */

            /**
             * Constructs a new GuardLeader.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a GuardLeader.
             * @implements IGuardLeader
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeader=} [properties] Properties to set
             */
            function GuardLeader(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * GuardLeader isGuardLeader.
             * @member {boolean} isGuardLeader
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @instance
             */
            GuardLeader.prototype.isGuardLeader = false;

            /**
             * Creates a new GuardLeader instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeader=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeader} GuardLeader instance
             */
            GuardLeader.create = function create(properties) {
              return new GuardLeader(properties);
            };

            /**
             * Encodes the specified GuardLeader message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeader.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeader} message GuardLeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardLeader.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.isGuardLeader != null &&
                Object.hasOwnProperty.call(message, "isGuardLeader")
              )
                writer
                  .uint32(/* id 1, wireType 0 =*/ 8)
                  .bool(message.isGuardLeader);
              return writer;
            };

            /**
             * Encodes the specified GuardLeader message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeader.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeader} message GuardLeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardLeader.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GuardLeader message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeader} GuardLeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardLeader.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.GuardLeader();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.isGuardLeader = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a GuardLeader message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeader} GuardLeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardLeader.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GuardLeader message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuardLeader.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (
                message.isGuardLeader != null &&
                message.hasOwnProperty("isGuardLeader")
              )
                if (typeof message.isGuardLeader !== "boolean")
                  return "isGuardLeader: boolean expected";
              return null;
            };

            /**
             * Creates a GuardLeader message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeader} GuardLeader
             */
            GuardLeader.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.GuardLeader
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.GuardLeader();
              if (object.isGuardLeader != null)
                message.isGuardLeader = Boolean(object.isGuardLeader);
              return message;
            };

            /**
             * Creates a plain object from a GuardLeader message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.GuardLeader} message GuardLeader
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuardLeader.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) object.isGuardLeader = false;
              if (
                message.isGuardLeader != null &&
                message.hasOwnProperty("isGuardLeader")
              )
                object.isGuardLeader = message.isGuardLeader;
              return object;
            };

            /**
             * Converts this GuardLeader to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuardLeader.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for GuardLeader
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeader
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GuardLeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.GuardLeader"
              );
            };

            return GuardLeader;
          })();

          user_dagw.GuardLeaderOption = (function () {
            /**
             * Properties of a GuardLeaderOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IGuardLeaderOption
             * @property {number|null} [ruid] GuardLeaderOption ruid
             * @property {number|null} [roomId] GuardLeaderOption roomId
             */

            /**
             * Constructs a new GuardLeaderOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a GuardLeaderOption.
             * @implements IGuardLeaderOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeaderOption=} [properties] Properties to set
             */
            function GuardLeaderOption(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * GuardLeaderOption ruid.
             * @member {number} ruid
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @instance
             */
            GuardLeaderOption.prototype.ruid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GuardLeaderOption roomId.
             * @member {number} roomId
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @instance
             */
            GuardLeaderOption.prototype.roomId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new GuardLeaderOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeaderOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeaderOption} GuardLeaderOption instance
             */
            GuardLeaderOption.create = function create(properties) {
              return new GuardLeaderOption(properties);
            };

            /**
             * Encodes the specified GuardLeaderOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeaderOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeaderOption} message GuardLeaderOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardLeaderOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.ruid != null &&
                Object.hasOwnProperty.call(message, "ruid")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.ruid);
              if (
                message.roomId != null &&
                Object.hasOwnProperty.call(message, "roomId")
              )
                writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.roomId);
              return writer;
            };

            /**
             * Encodes the specified GuardLeaderOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeaderOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardLeaderOption} message GuardLeaderOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardLeaderOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GuardLeaderOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeaderOption} GuardLeaderOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardLeaderOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.GuardLeaderOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.ruid = reader.int64();
                    break;
                  }
                  case 2: {
                    message.roomId = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a GuardLeaderOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeaderOption} GuardLeaderOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardLeaderOption.decodeDelimited = function decodeDelimited(
              reader
            ) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GuardLeaderOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuardLeaderOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (
                  !$util.isInteger(message.ruid) &&
                  !(
                    message.ruid &&
                    $util.isInteger(message.ruid.low) &&
                    $util.isInteger(message.ruid.high)
                  )
                )
                  return "ruid: integer|Long expected";
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (
                  !$util.isInteger(message.roomId) &&
                  !(
                    message.roomId &&
                    $util.isInteger(message.roomId.low) &&
                    $util.isInteger(message.roomId.high)
                  )
                )
                  return "roomId: integer|Long expected";
              return null;
            };

            /**
             * Creates a GuardLeaderOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.GuardLeaderOption} GuardLeaderOption
             */
            GuardLeaderOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .GuardLeaderOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.GuardLeaderOption();
              if (object.ruid != null)
                if ($util.Long)
                  (message.ruid = $util.Long.fromValue(
                    object.ruid
                  )).unsigned = false;
                else if (typeof object.ruid === "string")
                  message.ruid = parseInt(object.ruid, 10);
                else if (typeof object.ruid === "number")
                  message.ruid = object.ruid;
                else if (typeof object.ruid === "object")
                  message.ruid = new $util.LongBits(
                    object.ruid.low >>> 0,
                    object.ruid.high >>> 0
                  ).toNumber();
              if (object.roomId != null)
                if ($util.Long)
                  (message.roomId = $util.Long.fromValue(
                    object.roomId
                  )).unsigned = false;
                else if (typeof object.roomId === "string")
                  message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                  message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                  message.roomId = new $util.LongBits(
                    object.roomId.low >>> 0,
                    object.roomId.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a GuardLeaderOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.GuardLeaderOption} message GuardLeaderOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuardLeaderOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.ruid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.ruid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.roomId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.roomId = options.longs === String ? "0" : 0;
              }
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (typeof message.ruid === "number")
                  object.ruid =
                    options.longs === String
                      ? String(message.ruid)
                      : message.ruid;
                else
                  object.ruid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.ruid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.ruid.low >>> 0,
                          message.ruid.high >>> 0
                        ).toNumber()
                      : message.ruid;
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                  object.roomId =
                    options.longs === String
                      ? String(message.roomId)
                      : message.roomId;
                else
                  object.roomId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.roomId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.roomId.low >>> 0,
                          message.roomId.high >>> 0
                        ).toNumber()
                      : message.roomId;
              return object;
            };

            /**
             * Converts this GuardLeaderOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuardLeaderOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for GuardLeaderOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.GuardLeaderOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GuardLeaderOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.GuardLeaderOption"
              );
            };

            return GuardLeaderOption;
          })();

          user_dagw.GuardOption = (function () {
            /**
             * Properties of a GuardOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IGuardOption
             * @property {number|null} [ruid] GuardOption ruid
             * @property {boolean|null} [useLocalCache] GuardOption useLocalCache
             * @property {boolean|null} [strongDepend] GuardOption strongDepend
             */

            /**
             * Constructs a new GuardOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a GuardOption.
             * @implements IGuardOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IGuardOption=} [properties] Properties to set
             */
            function GuardOption(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * GuardOption ruid.
             * @member {number} ruid
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @instance
             */
            GuardOption.prototype.ruid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GuardOption useLocalCache.
             * @member {boolean} useLocalCache
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @instance
             */
            GuardOption.prototype.useLocalCache = false;

            /**
             * GuardOption strongDepend.
             * @member {boolean} strongDepend
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @instance
             */
            GuardOption.prototype.strongDepend = false;

            /**
             * Creates a new GuardOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.GuardOption} GuardOption instance
             */
            GuardOption.create = function create(properties) {
              return new GuardOption(properties);
            };

            /**
             * Encodes the specified GuardOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardOption} message GuardOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.ruid != null &&
                Object.hasOwnProperty.call(message, "ruid")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.ruid);
              if (
                message.useLocalCache != null &&
                Object.hasOwnProperty.call(message, "useLocalCache")
              )
                writer
                  .uint32(/* id 2, wireType 0 =*/ 16)
                  .bool(message.useLocalCache);
              if (
                message.strongDepend != null &&
                Object.hasOwnProperty.call(message, "strongDepend")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .bool(message.strongDepend);
              return writer;
            };

            /**
             * Encodes the specified GuardOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IGuardOption} message GuardOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuardOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GuardOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.GuardOption} GuardOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.GuardOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.ruid = reader.int64();
                    break;
                  }
                  case 2: {
                    message.useLocalCache = reader.bool();
                    break;
                  }
                  case 3: {
                    message.strongDepend = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a GuardOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.GuardOption} GuardOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuardOption.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GuardOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuardOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (
                  !$util.isInteger(message.ruid) &&
                  !(
                    message.ruid &&
                    $util.isInteger(message.ruid.low) &&
                    $util.isInteger(message.ruid.high)
                  )
                )
                  return "ruid: integer|Long expected";
              if (
                message.useLocalCache != null &&
                message.hasOwnProperty("useLocalCache")
              )
                if (typeof message.useLocalCache !== "boolean")
                  return "useLocalCache: boolean expected";
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                if (typeof message.strongDepend !== "boolean")
                  return "strongDepend: boolean expected";
              return null;
            };

            /**
             * Creates a GuardOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.GuardOption} GuardOption
             */
            GuardOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.GuardOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.GuardOption();
              if (object.ruid != null)
                if ($util.Long)
                  (message.ruid = $util.Long.fromValue(
                    object.ruid
                  )).unsigned = false;
                else if (typeof object.ruid === "string")
                  message.ruid = parseInt(object.ruid, 10);
                else if (typeof object.ruid === "number")
                  message.ruid = object.ruid;
                else if (typeof object.ruid === "object")
                  message.ruid = new $util.LongBits(
                    object.ruid.low >>> 0,
                    object.ruid.high >>> 0
                  ).toNumber();
              if (object.useLocalCache != null)
                message.useLocalCache = Boolean(object.useLocalCache);
              if (object.strongDepend != null)
                message.strongDepend = Boolean(object.strongDepend);
              return message;
            };

            /**
             * Creates a plain object from a GuardOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.GuardOption} message GuardOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuardOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.ruid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.ruid = options.longs === String ? "0" : 0;
                object.useLocalCache = false;
                object.strongDepend = false;
              }
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (typeof message.ruid === "number")
                  object.ruid =
                    options.longs === String
                      ? String(message.ruid)
                      : message.ruid;
                else
                  object.ruid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.ruid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.ruid.low >>> 0,
                          message.ruid.high >>> 0
                        ).toNumber()
                      : message.ruid;
              if (
                message.useLocalCache != null &&
                message.hasOwnProperty("useLocalCache")
              )
                object.useLocalCache = message.useLocalCache;
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                object.strongDepend = message.strongDepend;
              return object;
            };

            /**
             * Converts this GuardOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuardOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for GuardOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.GuardOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GuardOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.GuardOption"
              );
            };

            return GuardOption;
          })();

          /**
           * HaveMedalType enum.
           * @name bilibili.live.component.common_model.user_dagw.HaveMedalType
           * @enum {number}
           * @property {number} Medal_Common=0 Medal_Common value
           * @property {number} Medal_Group=1 Medal_Group value
           */
          user_dagw.HaveMedalType = (function () {
            const valuesById = {},
              values = Object.create(valuesById);
            values[(valuesById[0] = "Medal_Common")] = 0;
            values[(valuesById[1] = "Medal_Group")] = 1;
            return values;
          })();

          user_dagw.Medal = (function () {
            /**
             * Properties of a Medal.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IMedal
             * @property {string|null} [name] Medal name
             * @property {number|null} [level] Medal level
             * @property {number|null} [colorStart] Medal colorStart
             * @property {number|null} [colorEnd] Medal colorEnd
             * @property {number|null} [colorBorder] Medal colorBorder
             * @property {number|null} [color] Medal color
             * @property {number|null} [id] Medal id
             * @property {bilibili.live.component.common_model.user_dagw.HaveMedalType|null} [typ] Medal typ
             * @property {number|null} [isLight] Medal isLight
             * @property {number|null} [ruid] Medal ruid
             * @property {number|null} [guardLevel] Medal guardLevel
             * @property {number|null} [score] Medal score
             * @property {string|null} [guardIcon] Medal guardIcon
             * @property {string|null} [honorIcon] Medal honorIcon
             * @property {string|null} [v2MedalColorStart] Medal v2MedalColorStart
             * @property {string|null} [v2MedalColorEnd] Medal v2MedalColorEnd
             * @property {string|null} [v2MedalColorBorder] Medal v2MedalColorBorder
             * @property {string|null} [v2MedalColorText] Medal v2MedalColorText
             * @property {string|null} [v2MedalColorLevel] Medal v2MedalColorLevel
             * @property {number|null} [userReceiveCount] Medal userReceiveCount
             */

            /**
             * Constructs a new Medal.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a Medal.
             * @implements IMedal
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IMedal=} [properties] Properties to set
             */
            function Medal(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * Medal name.
             * @member {string} name
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.name = "";

            /**
             * Medal level.
             * @member {number} level
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.level = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal colorStart.
             * @member {number} colorStart
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.colorStart = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal colorEnd.
             * @member {number} colorEnd
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.colorEnd = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal colorBorder.
             * @member {number} colorBorder
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.colorBorder = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal color.
             * @member {number} color
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.color = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal id.
             * @member {number} id
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.id = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal typ.
             * @member {bilibili.live.component.common_model.user_dagw.HaveMedalType} typ
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.typ = 0;

            /**
             * Medal isLight.
             * @member {number} isLight
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.isLight = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal ruid.
             * @member {number} ruid
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.ruid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal guardLevel.
             * @member {number} guardLevel
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.guardLevel = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal score.
             * @member {number} score
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.score = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Medal guardIcon.
             * @member {string} guardIcon
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.guardIcon = "";

            /**
             * Medal honorIcon.
             * @member {string} honorIcon
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.honorIcon = "";

            /**
             * Medal v2MedalColorStart.
             * @member {string} v2MedalColorStart
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.v2MedalColorStart = "";

            /**
             * Medal v2MedalColorEnd.
             * @member {string} v2MedalColorEnd
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.v2MedalColorEnd = "";

            /**
             * Medal v2MedalColorBorder.
             * @member {string} v2MedalColorBorder
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.v2MedalColorBorder = "";

            /**
             * Medal v2MedalColorText.
             * @member {string} v2MedalColorText
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.v2MedalColorText = "";

            /**
             * Medal v2MedalColorLevel.
             * @member {string} v2MedalColorLevel
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.v2MedalColorLevel = "";

            /**
             * Medal userReceiveCount.
             * @member {number} userReceiveCount
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             */
            Medal.prototype.userReceiveCount = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new Medal instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedal=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.Medal} Medal instance
             */
            Medal.create = function create(properties) {
              return new Medal(properties);
            };

            /**
             * Encodes the specified Medal message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Medal.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedal} message Medal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Medal.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.name != null &&
                Object.hasOwnProperty.call(message, "name")
              )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
              if (
                message.level != null &&
                Object.hasOwnProperty.call(message, "level")
              )
                writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.level);
              if (
                message.colorStart != null &&
                Object.hasOwnProperty.call(message, "colorStart")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .int64(message.colorStart);
              if (
                message.colorEnd != null &&
                Object.hasOwnProperty.call(message, "colorEnd")
              )
                writer
                  .uint32(/* id 4, wireType 0 =*/ 32)
                  .int64(message.colorEnd);
              if (
                message.colorBorder != null &&
                Object.hasOwnProperty.call(message, "colorBorder")
              )
                writer
                  .uint32(/* id 5, wireType 0 =*/ 40)
                  .int64(message.colorBorder);
              if (
                message.color != null &&
                Object.hasOwnProperty.call(message, "color")
              )
                writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.color);
              if (
                message.id != null &&
                Object.hasOwnProperty.call(message, "id")
              )
                writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.id);
              if (
                message.typ != null &&
                Object.hasOwnProperty.call(message, "typ")
              )
                writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.typ);
              if (
                message.isLight != null &&
                Object.hasOwnProperty.call(message, "isLight")
              )
                writer
                  .uint32(/* id 9, wireType 0 =*/ 72)
                  .int64(message.isLight);
              if (
                message.ruid != null &&
                Object.hasOwnProperty.call(message, "ruid")
              )
                writer.uint32(/* id 10, wireType 0 =*/ 80).int64(message.ruid);
              if (
                message.guardLevel != null &&
                Object.hasOwnProperty.call(message, "guardLevel")
              )
                writer
                  .uint32(/* id 11, wireType 0 =*/ 88)
                  .int64(message.guardLevel);
              if (
                message.score != null &&
                Object.hasOwnProperty.call(message, "score")
              )
                writer.uint32(/* id 12, wireType 0 =*/ 96).int64(message.score);
              if (
                message.guardIcon != null &&
                Object.hasOwnProperty.call(message, "guardIcon")
              )
                writer
                  .uint32(/* id 13, wireType 2 =*/ 106)
                  .string(message.guardIcon);
              if (
                message.honorIcon != null &&
                Object.hasOwnProperty.call(message, "honorIcon")
              )
                writer
                  .uint32(/* id 14, wireType 2 =*/ 114)
                  .string(message.honorIcon);
              if (
                message.v2MedalColorStart != null &&
                Object.hasOwnProperty.call(message, "v2MedalColorStart")
              )
                writer
                  .uint32(/* id 15, wireType 2 =*/ 122)
                  .string(message.v2MedalColorStart);
              if (
                message.v2MedalColorEnd != null &&
                Object.hasOwnProperty.call(message, "v2MedalColorEnd")
              )
                writer
                  .uint32(/* id 16, wireType 2 =*/ 130)
                  .string(message.v2MedalColorEnd);
              if (
                message.v2MedalColorBorder != null &&
                Object.hasOwnProperty.call(message, "v2MedalColorBorder")
              )
                writer
                  .uint32(/* id 17, wireType 2 =*/ 138)
                  .string(message.v2MedalColorBorder);
              if (
                message.v2MedalColorText != null &&
                Object.hasOwnProperty.call(message, "v2MedalColorText")
              )
                writer
                  .uint32(/* id 18, wireType 2 =*/ 146)
                  .string(message.v2MedalColorText);
              if (
                message.v2MedalColorLevel != null &&
                Object.hasOwnProperty.call(message, "v2MedalColorLevel")
              )
                writer
                  .uint32(/* id 19, wireType 2 =*/ 154)
                  .string(message.v2MedalColorLevel);
              if (
                message.userReceiveCount != null &&
                Object.hasOwnProperty.call(message, "userReceiveCount")
              )
                writer
                  .uint32(/* id 20, wireType 0 =*/ 160)
                  .int64(message.userReceiveCount);
              return writer;
            };

            /**
             * Encodes the specified Medal message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Medal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedal} message Medal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Medal.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Medal message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.Medal} Medal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Medal.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.Medal();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.level = reader.int64();
                    break;
                  }
                  case 3: {
                    message.colorStart = reader.int64();
                    break;
                  }
                  case 4: {
                    message.colorEnd = reader.int64();
                    break;
                  }
                  case 5: {
                    message.colorBorder = reader.int64();
                    break;
                  }
                  case 6: {
                    message.color = reader.int64();
                    break;
                  }
                  case 7: {
                    message.id = reader.int64();
                    break;
                  }
                  case 8: {
                    message.typ = reader.int32();
                    break;
                  }
                  case 9: {
                    message.isLight = reader.int64();
                    break;
                  }
                  case 10: {
                    message.ruid = reader.int64();
                    break;
                  }
                  case 11: {
                    message.guardLevel = reader.int64();
                    break;
                  }
                  case 12: {
                    message.score = reader.int64();
                    break;
                  }
                  case 13: {
                    message.guardIcon = reader.string();
                    break;
                  }
                  case 14: {
                    message.honorIcon = reader.string();
                    break;
                  }
                  case 15: {
                    message.v2MedalColorStart = reader.string();
                    break;
                  }
                  case 16: {
                    message.v2MedalColorEnd = reader.string();
                    break;
                  }
                  case 17: {
                    message.v2MedalColorBorder = reader.string();
                    break;
                  }
                  case 18: {
                    message.v2MedalColorText = reader.string();
                    break;
                  }
                  case 19: {
                    message.v2MedalColorLevel = reader.string();
                    break;
                  }
                  case 20: {
                    message.userReceiveCount = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a Medal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.Medal} Medal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Medal.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Medal message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Medal.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                  return "name: string expected";
              if (message.level != null && message.hasOwnProperty("level"))
                if (
                  !$util.isInteger(message.level) &&
                  !(
                    message.level &&
                    $util.isInteger(message.level.low) &&
                    $util.isInteger(message.level.high)
                  )
                )
                  return "level: integer|Long expected";
              if (
                message.colorStart != null &&
                message.hasOwnProperty("colorStart")
              )
                if (
                  !$util.isInteger(message.colorStart) &&
                  !(
                    message.colorStart &&
                    $util.isInteger(message.colorStart.low) &&
                    $util.isInteger(message.colorStart.high)
                  )
                )
                  return "colorStart: integer|Long expected";
              if (
                message.colorEnd != null &&
                message.hasOwnProperty("colorEnd")
              )
                if (
                  !$util.isInteger(message.colorEnd) &&
                  !(
                    message.colorEnd &&
                    $util.isInteger(message.colorEnd.low) &&
                    $util.isInteger(message.colorEnd.high)
                  )
                )
                  return "colorEnd: integer|Long expected";
              if (
                message.colorBorder != null &&
                message.hasOwnProperty("colorBorder")
              )
                if (
                  !$util.isInteger(message.colorBorder) &&
                  !(
                    message.colorBorder &&
                    $util.isInteger(message.colorBorder.low) &&
                    $util.isInteger(message.colorBorder.high)
                  )
                )
                  return "colorBorder: integer|Long expected";
              if (message.color != null && message.hasOwnProperty("color"))
                if (
                  !$util.isInteger(message.color) &&
                  !(
                    message.color &&
                    $util.isInteger(message.color.low) &&
                    $util.isInteger(message.color.high)
                  )
                )
                  return "color: integer|Long expected";
              if (message.id != null && message.hasOwnProperty("id"))
                if (
                  !$util.isInteger(message.id) &&
                  !(
                    message.id &&
                    $util.isInteger(message.id.low) &&
                    $util.isInteger(message.id.high)
                  )
                )
                  return "id: integer|Long expected";
              if (message.typ != null && message.hasOwnProperty("typ"))
                switch (message.typ) {
                  default:
                    return "typ: enum value expected";
                  case 0:
                  case 1:
                    break;
                }
              if (message.isLight != null && message.hasOwnProperty("isLight"))
                if (
                  !$util.isInteger(message.isLight) &&
                  !(
                    message.isLight &&
                    $util.isInteger(message.isLight.low) &&
                    $util.isInteger(message.isLight.high)
                  )
                )
                  return "isLight: integer|Long expected";
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (
                  !$util.isInteger(message.ruid) &&
                  !(
                    message.ruid &&
                    $util.isInteger(message.ruid.low) &&
                    $util.isInteger(message.ruid.high)
                  )
                )
                  return "ruid: integer|Long expected";
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (
                  !$util.isInteger(message.guardLevel) &&
                  !(
                    message.guardLevel &&
                    $util.isInteger(message.guardLevel.low) &&
                    $util.isInteger(message.guardLevel.high)
                  )
                )
                  return "guardLevel: integer|Long expected";
              if (message.score != null && message.hasOwnProperty("score"))
                if (
                  !$util.isInteger(message.score) &&
                  !(
                    message.score &&
                    $util.isInteger(message.score.low) &&
                    $util.isInteger(message.score.high)
                  )
                )
                  return "score: integer|Long expected";
              if (
                message.guardIcon != null &&
                message.hasOwnProperty("guardIcon")
              )
                if (!$util.isString(message.guardIcon))
                  return "guardIcon: string expected";
              if (
                message.honorIcon != null &&
                message.hasOwnProperty("honorIcon")
              )
                if (!$util.isString(message.honorIcon))
                  return "honorIcon: string expected";
              if (
                message.v2MedalColorStart != null &&
                message.hasOwnProperty("v2MedalColorStart")
              )
                if (!$util.isString(message.v2MedalColorStart))
                  return "v2MedalColorStart: string expected";
              if (
                message.v2MedalColorEnd != null &&
                message.hasOwnProperty("v2MedalColorEnd")
              )
                if (!$util.isString(message.v2MedalColorEnd))
                  return "v2MedalColorEnd: string expected";
              if (
                message.v2MedalColorBorder != null &&
                message.hasOwnProperty("v2MedalColorBorder")
              )
                if (!$util.isString(message.v2MedalColorBorder))
                  return "v2MedalColorBorder: string expected";
              if (
                message.v2MedalColorText != null &&
                message.hasOwnProperty("v2MedalColorText")
              )
                if (!$util.isString(message.v2MedalColorText))
                  return "v2MedalColorText: string expected";
              if (
                message.v2MedalColorLevel != null &&
                message.hasOwnProperty("v2MedalColorLevel")
              )
                if (!$util.isString(message.v2MedalColorLevel))
                  return "v2MedalColorLevel: string expected";
              if (
                message.userReceiveCount != null &&
                message.hasOwnProperty("userReceiveCount")
              )
                if (
                  !$util.isInteger(message.userReceiveCount) &&
                  !(
                    message.userReceiveCount &&
                    $util.isInteger(message.userReceiveCount.low) &&
                    $util.isInteger(message.userReceiveCount.high)
                  )
                )
                  return "userReceiveCount: integer|Long expected";
              return null;
            };

            /**
             * Creates a Medal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.Medal} Medal
             */
            Medal.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.Medal
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.Medal();
              if (object.name != null) message.name = String(object.name);
              if (object.level != null)
                if ($util.Long)
                  (message.level = $util.Long.fromValue(
                    object.level
                  )).unsigned = false;
                else if (typeof object.level === "string")
                  message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                  message.level = object.level;
                else if (typeof object.level === "object")
                  message.level = new $util.LongBits(
                    object.level.low >>> 0,
                    object.level.high >>> 0
                  ).toNumber();
              if (object.colorStart != null)
                if ($util.Long)
                  (message.colorStart = $util.Long.fromValue(
                    object.colorStart
                  )).unsigned = false;
                else if (typeof object.colorStart === "string")
                  message.colorStart = parseInt(object.colorStart, 10);
                else if (typeof object.colorStart === "number")
                  message.colorStart = object.colorStart;
                else if (typeof object.colorStart === "object")
                  message.colorStart = new $util.LongBits(
                    object.colorStart.low >>> 0,
                    object.colorStart.high >>> 0
                  ).toNumber();
              if (object.colorEnd != null)
                if ($util.Long)
                  (message.colorEnd = $util.Long.fromValue(
                    object.colorEnd
                  )).unsigned = false;
                else if (typeof object.colorEnd === "string")
                  message.colorEnd = parseInt(object.colorEnd, 10);
                else if (typeof object.colorEnd === "number")
                  message.colorEnd = object.colorEnd;
                else if (typeof object.colorEnd === "object")
                  message.colorEnd = new $util.LongBits(
                    object.colorEnd.low >>> 0,
                    object.colorEnd.high >>> 0
                  ).toNumber();
              if (object.colorBorder != null)
                if ($util.Long)
                  (message.colorBorder = $util.Long.fromValue(
                    object.colorBorder
                  )).unsigned = false;
                else if (typeof object.colorBorder === "string")
                  message.colorBorder = parseInt(object.colorBorder, 10);
                else if (typeof object.colorBorder === "number")
                  message.colorBorder = object.colorBorder;
                else if (typeof object.colorBorder === "object")
                  message.colorBorder = new $util.LongBits(
                    object.colorBorder.low >>> 0,
                    object.colorBorder.high >>> 0
                  ).toNumber();
              if (object.color != null)
                if ($util.Long)
                  (message.color = $util.Long.fromValue(
                    object.color
                  )).unsigned = false;
                else if (typeof object.color === "string")
                  message.color = parseInt(object.color, 10);
                else if (typeof object.color === "number")
                  message.color = object.color;
                else if (typeof object.color === "object")
                  message.color = new $util.LongBits(
                    object.color.low >>> 0,
                    object.color.high >>> 0
                  ).toNumber();
              if (object.id != null)
                if ($util.Long)
                  (message.id = $util.Long.fromValue(
                    object.id
                  )).unsigned = false;
                else if (typeof object.id === "string")
                  message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number") message.id = object.id;
                else if (typeof object.id === "object")
                  message.id = new $util.LongBits(
                    object.id.low >>> 0,
                    object.id.high >>> 0
                  ).toNumber();
              switch (object.typ) {
                default:
                  if (typeof object.typ === "number") {
                    message.typ = object.typ;
                    break;
                  }
                  break;
                case "Medal_Common":
                case 0:
                  message.typ = 0;
                  break;
                case "Medal_Group":
                case 1:
                  message.typ = 1;
                  break;
              }
              if (object.isLight != null)
                if ($util.Long)
                  (message.isLight = $util.Long.fromValue(
                    object.isLight
                  )).unsigned = false;
                else if (typeof object.isLight === "string")
                  message.isLight = parseInt(object.isLight, 10);
                else if (typeof object.isLight === "number")
                  message.isLight = object.isLight;
                else if (typeof object.isLight === "object")
                  message.isLight = new $util.LongBits(
                    object.isLight.low >>> 0,
                    object.isLight.high >>> 0
                  ).toNumber();
              if (object.ruid != null)
                if ($util.Long)
                  (message.ruid = $util.Long.fromValue(
                    object.ruid
                  )).unsigned = false;
                else if (typeof object.ruid === "string")
                  message.ruid = parseInt(object.ruid, 10);
                else if (typeof object.ruid === "number")
                  message.ruid = object.ruid;
                else if (typeof object.ruid === "object")
                  message.ruid = new $util.LongBits(
                    object.ruid.low >>> 0,
                    object.ruid.high >>> 0
                  ).toNumber();
              if (object.guardLevel != null)
                if ($util.Long)
                  (message.guardLevel = $util.Long.fromValue(
                    object.guardLevel
                  )).unsigned = false;
                else if (typeof object.guardLevel === "string")
                  message.guardLevel = parseInt(object.guardLevel, 10);
                else if (typeof object.guardLevel === "number")
                  message.guardLevel = object.guardLevel;
                else if (typeof object.guardLevel === "object")
                  message.guardLevel = new $util.LongBits(
                    object.guardLevel.low >>> 0,
                    object.guardLevel.high >>> 0
                  ).toNumber();
              if (object.score != null)
                if ($util.Long)
                  (message.score = $util.Long.fromValue(
                    object.score
                  )).unsigned = false;
                else if (typeof object.score === "string")
                  message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                  message.score = object.score;
                else if (typeof object.score === "object")
                  message.score = new $util.LongBits(
                    object.score.low >>> 0,
                    object.score.high >>> 0
                  ).toNumber();
              if (object.guardIcon != null)
                message.guardIcon = String(object.guardIcon);
              if (object.honorIcon != null)
                message.honorIcon = String(object.honorIcon);
              if (object.v2MedalColorStart != null)
                message.v2MedalColorStart = String(object.v2MedalColorStart);
              if (object.v2MedalColorEnd != null)
                message.v2MedalColorEnd = String(object.v2MedalColorEnd);
              if (object.v2MedalColorBorder != null)
                message.v2MedalColorBorder = String(object.v2MedalColorBorder);
              if (object.v2MedalColorText != null)
                message.v2MedalColorText = String(object.v2MedalColorText);
              if (object.v2MedalColorLevel != null)
                message.v2MedalColorLevel = String(object.v2MedalColorLevel);
              if (object.userReceiveCount != null)
                if ($util.Long)
                  (message.userReceiveCount = $util.Long.fromValue(
                    object.userReceiveCount
                  )).unsigned = false;
                else if (typeof object.userReceiveCount === "string")
                  message.userReceiveCount = parseInt(
                    object.userReceiveCount,
                    10
                  );
                else if (typeof object.userReceiveCount === "number")
                  message.userReceiveCount = object.userReceiveCount;
                else if (typeof object.userReceiveCount === "object")
                  message.userReceiveCount = new $util.LongBits(
                    object.userReceiveCount.low >>> 0,
                    object.userReceiveCount.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a Medal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.Medal} message Medal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Medal.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.level =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.level = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.colorStart =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.colorStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.colorEnd =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.colorEnd = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.colorBorder =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.colorBorder = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.color =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.color = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.id =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.id = options.longs === String ? "0" : 0;
                object.typ = options.enums === String ? "Medal_Common" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.isLight =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.isLight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.ruid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.ruid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.guardLevel =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.guardLevel = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.score =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.score = options.longs === String ? "0" : 0;
                object.guardIcon = "";
                object.honorIcon = "";
                object.v2MedalColorStart = "";
                object.v2MedalColorEnd = "";
                object.v2MedalColorBorder = "";
                object.v2MedalColorText = "";
                object.v2MedalColorLevel = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.userReceiveCount =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else
                  object.userReceiveCount = options.longs === String ? "0" : 0;
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                  object.level =
                    options.longs === String
                      ? String(message.level)
                      : message.level;
                else
                  object.level =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.level)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.level.low >>> 0,
                          message.level.high >>> 0
                        ).toNumber()
                      : message.level;
              if (
                message.colorStart != null &&
                message.hasOwnProperty("colorStart")
              )
                if (typeof message.colorStart === "number")
                  object.colorStart =
                    options.longs === String
                      ? String(message.colorStart)
                      : message.colorStart;
                else
                  object.colorStart =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.colorStart)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.colorStart.low >>> 0,
                          message.colorStart.high >>> 0
                        ).toNumber()
                      : message.colorStart;
              if (
                message.colorEnd != null &&
                message.hasOwnProperty("colorEnd")
              )
                if (typeof message.colorEnd === "number")
                  object.colorEnd =
                    options.longs === String
                      ? String(message.colorEnd)
                      : message.colorEnd;
                else
                  object.colorEnd =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.colorEnd)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.colorEnd.low >>> 0,
                          message.colorEnd.high >>> 0
                        ).toNumber()
                      : message.colorEnd;
              if (
                message.colorBorder != null &&
                message.hasOwnProperty("colorBorder")
              )
                if (typeof message.colorBorder === "number")
                  object.colorBorder =
                    options.longs === String
                      ? String(message.colorBorder)
                      : message.colorBorder;
                else
                  object.colorBorder =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.colorBorder)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.colorBorder.low >>> 0,
                          message.colorBorder.high >>> 0
                        ).toNumber()
                      : message.colorBorder;
              if (message.color != null && message.hasOwnProperty("color"))
                if (typeof message.color === "number")
                  object.color =
                    options.longs === String
                      ? String(message.color)
                      : message.color;
                else
                  object.color =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.color)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.color.low >>> 0,
                          message.color.high >>> 0
                        ).toNumber()
                      : message.color;
              if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                  object.id =
                    options.longs === String ? String(message.id) : message.id;
                else
                  object.id =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.id)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.id.low >>> 0,
                          message.id.high >>> 0
                        ).toNumber()
                      : message.id;
              if (message.typ != null && message.hasOwnProperty("typ"))
                object.typ =
                  options.enums === String
                    ? $root.bilibili.live.component.common_model.user_dagw
                        .HaveMedalType[message.typ] === undefined
                      ? message.typ
                      : $root.bilibili.live.component.common_model.user_dagw
                          .HaveMedalType[message.typ]
                    : message.typ;
              if (message.isLight != null && message.hasOwnProperty("isLight"))
                if (typeof message.isLight === "number")
                  object.isLight =
                    options.longs === String
                      ? String(message.isLight)
                      : message.isLight;
                else
                  object.isLight =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.isLight)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.isLight.low >>> 0,
                          message.isLight.high >>> 0
                        ).toNumber()
                      : message.isLight;
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (typeof message.ruid === "number")
                  object.ruid =
                    options.longs === String
                      ? String(message.ruid)
                      : message.ruid;
                else
                  object.ruid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.ruid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.ruid.low >>> 0,
                          message.ruid.high >>> 0
                        ).toNumber()
                      : message.ruid;
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (typeof message.guardLevel === "number")
                  object.guardLevel =
                    options.longs === String
                      ? String(message.guardLevel)
                      : message.guardLevel;
                else
                  object.guardLevel =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.guardLevel)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.guardLevel.low >>> 0,
                          message.guardLevel.high >>> 0
                        ).toNumber()
                      : message.guardLevel;
              if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                  object.score =
                    options.longs === String
                      ? String(message.score)
                      : message.score;
                else
                  object.score =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.score)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.score.low >>> 0,
                          message.score.high >>> 0
                        ).toNumber()
                      : message.score;
              if (
                message.guardIcon != null &&
                message.hasOwnProperty("guardIcon")
              )
                object.guardIcon = message.guardIcon;
              if (
                message.honorIcon != null &&
                message.hasOwnProperty("honorIcon")
              )
                object.honorIcon = message.honorIcon;
              if (
                message.v2MedalColorStart != null &&
                message.hasOwnProperty("v2MedalColorStart")
              )
                object.v2MedalColorStart = message.v2MedalColorStart;
              if (
                message.v2MedalColorEnd != null &&
                message.hasOwnProperty("v2MedalColorEnd")
              )
                object.v2MedalColorEnd = message.v2MedalColorEnd;
              if (
                message.v2MedalColorBorder != null &&
                message.hasOwnProperty("v2MedalColorBorder")
              )
                object.v2MedalColorBorder = message.v2MedalColorBorder;
              if (
                message.v2MedalColorText != null &&
                message.hasOwnProperty("v2MedalColorText")
              )
                object.v2MedalColorText = message.v2MedalColorText;
              if (
                message.v2MedalColorLevel != null &&
                message.hasOwnProperty("v2MedalColorLevel")
              )
                object.v2MedalColorLevel = message.v2MedalColorLevel;
              if (
                message.userReceiveCount != null &&
                message.hasOwnProperty("userReceiveCount")
              )
                if (typeof message.userReceiveCount === "number")
                  object.userReceiveCount =
                    options.longs === String
                      ? String(message.userReceiveCount)
                      : message.userReceiveCount;
                else
                  object.userReceiveCount =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(
                          message.userReceiveCount
                        )
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.userReceiveCount.low >>> 0,
                          message.userReceiveCount.high >>> 0
                        ).toNumber()
                      : message.userReceiveCount;
              return object;
            };

            /**
             * Converts this Medal to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Medal.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for Medal
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.Medal
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Medal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.Medal"
              );
            };

            return Medal;
          })();

          user_dagw.MedalOption = (function () {
            /**
             * Properties of a MedalOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IMedalOption
             * @property {bilibili.live.component.common_model.user_dagw.MedalType|null} [typ] MedalOption typ
             * @property {number|null} [ruid] MedalOption ruid
             * @property {boolean|null} [needGuard] MedalOption needGuard
             * @property {boolean|null} [strongDepend] MedalOption strongDepend
             * @property {boolean|null} [needGroup] MedalOption needGroup
             */

            /**
             * Constructs a new MedalOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a MedalOption.
             * @implements IMedalOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IMedalOption=} [properties] Properties to set
             */
            function MedalOption(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * MedalOption typ.
             * @member {bilibili.live.component.common_model.user_dagw.MedalType} typ
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             */
            MedalOption.prototype.typ = 0;

            /**
             * MedalOption ruid.
             * @member {number} ruid
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             */
            MedalOption.prototype.ruid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * MedalOption needGuard.
             * @member {boolean} needGuard
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             */
            MedalOption.prototype.needGuard = false;

            /**
             * MedalOption strongDepend.
             * @member {boolean} strongDepend
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             */
            MedalOption.prototype.strongDepend = false;

            /**
             * MedalOption needGroup.
             * @member {boolean} needGroup
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             */
            MedalOption.prototype.needGroup = false;

            /**
             * Creates a new MedalOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedalOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.MedalOption} MedalOption instance
             */
            MedalOption.create = function create(properties) {
              return new MedalOption(properties);
            };

            /**
             * Encodes the specified MedalOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.MedalOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedalOption} message MedalOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MedalOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.typ != null &&
                Object.hasOwnProperty.call(message, "typ")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.typ);
              if (
                message.ruid != null &&
                Object.hasOwnProperty.call(message, "ruid")
              )
                writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.ruid);
              if (
                message.needGuard != null &&
                Object.hasOwnProperty.call(message, "needGuard")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .bool(message.needGuard);
              if (
                message.strongDepend != null &&
                Object.hasOwnProperty.call(message, "strongDepend")
              )
                writer
                  .uint32(/* id 4, wireType 0 =*/ 32)
                  .bool(message.strongDepend);
              if (
                message.needGroup != null &&
                Object.hasOwnProperty.call(message, "needGroup")
              )
                writer
                  .uint32(/* id 5, wireType 0 =*/ 40)
                  .bool(message.needGroup);
              return writer;
            };

            /**
             * Encodes the specified MedalOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.MedalOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IMedalOption} message MedalOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MedalOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MedalOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.MedalOption} MedalOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MedalOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.MedalOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.typ = reader.int32();
                    break;
                  }
                  case 2: {
                    message.ruid = reader.int64();
                    break;
                  }
                  case 3: {
                    message.needGuard = reader.bool();
                    break;
                  }
                  case 4: {
                    message.strongDepend = reader.bool();
                    break;
                  }
                  case 5: {
                    message.needGroup = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a MedalOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.MedalOption} MedalOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MedalOption.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MedalOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MedalOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.typ != null && message.hasOwnProperty("typ"))
                switch (message.typ) {
                  default:
                    return "typ: enum value expected";
                  case 0:
                  case 1:
                    break;
                }
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (
                  !$util.isInteger(message.ruid) &&
                  !(
                    message.ruid &&
                    $util.isInteger(message.ruid.low) &&
                    $util.isInteger(message.ruid.high)
                  )
                )
                  return "ruid: integer|Long expected";
              if (
                message.needGuard != null &&
                message.hasOwnProperty("needGuard")
              )
                if (typeof message.needGuard !== "boolean")
                  return "needGuard: boolean expected";
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                if (typeof message.strongDepend !== "boolean")
                  return "strongDepend: boolean expected";
              if (
                message.needGroup != null &&
                message.hasOwnProperty("needGroup")
              )
                if (typeof message.needGroup !== "boolean")
                  return "needGroup: boolean expected";
              return null;
            };

            /**
             * Creates a MedalOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.MedalOption} MedalOption
             */
            MedalOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.MedalOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.MedalOption();
              switch (object.typ) {
                default:
                  if (typeof object.typ === "number") {
                    message.typ = object.typ;
                    break;
                  }
                  break;
                case "Medal_Wear":
                case 0:
                  message.typ = 0;
                  break;
                case "Medal_Spec":
                case 1:
                  message.typ = 1;
                  break;
              }
              if (object.ruid != null)
                if ($util.Long)
                  (message.ruid = $util.Long.fromValue(
                    object.ruid
                  )).unsigned = false;
                else if (typeof object.ruid === "string")
                  message.ruid = parseInt(object.ruid, 10);
                else if (typeof object.ruid === "number")
                  message.ruid = object.ruid;
                else if (typeof object.ruid === "object")
                  message.ruid = new $util.LongBits(
                    object.ruid.low >>> 0,
                    object.ruid.high >>> 0
                  ).toNumber();
              if (object.needGuard != null)
                message.needGuard = Boolean(object.needGuard);
              if (object.strongDepend != null)
                message.strongDepend = Boolean(object.strongDepend);
              if (object.needGroup != null)
                message.needGroup = Boolean(object.needGroup);
              return message;
            };

            /**
             * Creates a plain object from a MedalOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.MedalOption} message MedalOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MedalOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.typ = options.enums === String ? "Medal_Wear" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.ruid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.ruid = options.longs === String ? "0" : 0;
                object.needGuard = false;
                object.strongDepend = false;
                object.needGroup = false;
              }
              if (message.typ != null && message.hasOwnProperty("typ"))
                object.typ =
                  options.enums === String
                    ? $root.bilibili.live.component.common_model.user_dagw
                        .MedalType[message.typ] === undefined
                      ? message.typ
                      : $root.bilibili.live.component.common_model.user_dagw
                          .MedalType[message.typ]
                    : message.typ;
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (typeof message.ruid === "number")
                  object.ruid =
                    options.longs === String
                      ? String(message.ruid)
                      : message.ruid;
                else
                  object.ruid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.ruid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.ruid.low >>> 0,
                          message.ruid.high >>> 0
                        ).toNumber()
                      : message.ruid;
              if (
                message.needGuard != null &&
                message.hasOwnProperty("needGuard")
              )
                object.needGuard = message.needGuard;
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                object.strongDepend = message.strongDepend;
              if (
                message.needGroup != null &&
                message.hasOwnProperty("needGroup")
              )
                object.needGroup = message.needGroup;
              return object;
            };

            /**
             * Converts this MedalOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MedalOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for MedalOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.MedalOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MedalOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.MedalOption"
              );
            };

            return MedalOption;
          })();

          /**
           * MedalType enum.
           * @name bilibili.live.component.common_model.user_dagw.MedalType
           * @enum {number}
           * @property {number} Medal_Wear=0 Medal_Wear value
           * @property {number} Medal_Spec=1 Medal_Spec value
           */
          user_dagw.MedalType = (function () {
            const valuesById = {},
              values = Object.create(valuesById);
            values[(valuesById[0] = "Medal_Wear")] = 0;
            values[(valuesById[1] = "Medal_Spec")] = 1;
            return values;
          })();

          user_dagw.OfficialInfo = (function () {
            /**
             * Properties of an OfficialInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IOfficialInfo
             * @property {number|null} [role] OfficialInfo role
             * @property {string|null} [title] OfficialInfo title
             * @property {string|null} [desc] OfficialInfo desc
             * @property {number|null} [type] OfficialInfo type
             */

            /**
             * Constructs a new OfficialInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents an OfficialInfo.
             * @implements IOfficialInfo
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IOfficialInfo=} [properties] Properties to set
             */
            function OfficialInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * OfficialInfo role.
             * @member {number} role
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @instance
             */
            OfficialInfo.prototype.role = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * OfficialInfo title.
             * @member {string} title
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @instance
             */
            OfficialInfo.prototype.title = "";

            /**
             * OfficialInfo desc.
             * @member {string} desc
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @instance
             */
            OfficialInfo.prototype.desc = "";

            /**
             * OfficialInfo type.
             * @member {number} type
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @instance
             */
            OfficialInfo.prototype.type = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new OfficialInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IOfficialInfo=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.OfficialInfo} OfficialInfo instance
             */
            OfficialInfo.create = function create(properties) {
              return new OfficialInfo(properties);
            };

            /**
             * Encodes the specified OfficialInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.OfficialInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IOfficialInfo} message OfficialInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OfficialInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.role != null &&
                Object.hasOwnProperty.call(message, "role")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.role);
              if (
                message.title != null &&
                Object.hasOwnProperty.call(message, "title")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.title);
              if (
                message.desc != null &&
                Object.hasOwnProperty.call(message, "desc")
              )
                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.desc);
              if (
                message.type != null &&
                Object.hasOwnProperty.call(message, "type")
              )
                writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.type);
              return writer;
            };

            /**
             * Encodes the specified OfficialInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.OfficialInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IOfficialInfo} message OfficialInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OfficialInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OfficialInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.OfficialInfo} OfficialInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OfficialInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.OfficialInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.role = reader.int64();
                    break;
                  }
                  case 2: {
                    message.title = reader.string();
                    break;
                  }
                  case 3: {
                    message.desc = reader.string();
                    break;
                  }
                  case 4: {
                    message.type = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes an OfficialInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.OfficialInfo} OfficialInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OfficialInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OfficialInfo message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OfficialInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.role != null && message.hasOwnProperty("role"))
                if (
                  !$util.isInteger(message.role) &&
                  !(
                    message.role &&
                    $util.isInteger(message.role.low) &&
                    $util.isInteger(message.role.high)
                  )
                )
                  return "role: integer|Long expected";
              if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                  return "title: string expected";
              if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                  return "desc: string expected";
              if (message.type != null && message.hasOwnProperty("type"))
                if (
                  !$util.isInteger(message.type) &&
                  !(
                    message.type &&
                    $util.isInteger(message.type.low) &&
                    $util.isInteger(message.type.high)
                  )
                )
                  return "type: integer|Long expected";
              return null;
            };

            /**
             * Creates an OfficialInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.OfficialInfo} OfficialInfo
             */
            OfficialInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .OfficialInfo
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.OfficialInfo();
              if (object.role != null)
                if ($util.Long)
                  (message.role = $util.Long.fromValue(
                    object.role
                  )).unsigned = false;
                else if (typeof object.role === "string")
                  message.role = parseInt(object.role, 10);
                else if (typeof object.role === "number")
                  message.role = object.role;
                else if (typeof object.role === "object")
                  message.role = new $util.LongBits(
                    object.role.low >>> 0,
                    object.role.high >>> 0
                  ).toNumber();
              if (object.title != null) message.title = String(object.title);
              if (object.desc != null) message.desc = String(object.desc);
              if (object.type != null)
                if ($util.Long)
                  (message.type = $util.Long.fromValue(
                    object.type
                  )).unsigned = false;
                else if (typeof object.type === "string")
                  message.type = parseInt(object.type, 10);
                else if (typeof object.type === "number")
                  message.type = object.type;
                else if (typeof object.type === "object")
                  message.type = new $util.LongBits(
                    object.type.low >>> 0,
                    object.type.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from an OfficialInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.OfficialInfo} message OfficialInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OfficialInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.role =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.role = options.longs === String ? "0" : 0;
                object.title = "";
                object.desc = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.type =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.type = options.longs === String ? "0" : 0;
              }
              if (message.role != null && message.hasOwnProperty("role"))
                if (typeof message.role === "number")
                  object.role =
                    options.longs === String
                      ? String(message.role)
                      : message.role;
                else
                  object.role =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.role)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.role.low >>> 0,
                          message.role.high >>> 0
                        ).toNumber()
                      : message.role;
              if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
              if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
              if (message.type != null && message.hasOwnProperty("type"))
                if (typeof message.type === "number")
                  object.type =
                    options.longs === String
                      ? String(message.type)
                      : message.type;
                else
                  object.type =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.type)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.type.low >>> 0,
                          message.type.high >>> 0
                        ).toNumber()
                      : message.type;
              return object;
            };

            /**
             * Converts this OfficialInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OfficialInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for OfficialInfo
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.OfficialInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OfficialInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.OfficialInfo"
              );
            };

            return OfficialInfo;
          })();

          user_dagw.RiskCtrl = (function () {
            /**
             * Properties of a RiskCtrl.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IRiskCtrl
             * @property {number|null} [roomId] RiskCtrl roomId
             * @property {bilibili.live.component.common_model.user_dagw.RiskPolicyEnum|null} [policy] RiskCtrl policy
             */

            /**
             * Constructs a new RiskCtrl.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a RiskCtrl.
             * @implements IRiskCtrl
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrl=} [properties] Properties to set
             */
            function RiskCtrl(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * RiskCtrl roomId.
             * @member {number} roomId
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @instance
             */
            RiskCtrl.prototype.roomId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * RiskCtrl policy.
             * @member {bilibili.live.component.common_model.user_dagw.RiskPolicyEnum} policy
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @instance
             */
            RiskCtrl.prototype.policy = 0;

            /**
             * Creates a new RiskCtrl instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrl=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrl} RiskCtrl instance
             */
            RiskCtrl.create = function create(properties) {
              return new RiskCtrl(properties);
            };

            /**
             * Encodes the specified RiskCtrl message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrl.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrl} message RiskCtrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RiskCtrl.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.roomId != null &&
                Object.hasOwnProperty.call(message, "roomId")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.roomId);
              if (
                message.policy != null &&
                Object.hasOwnProperty.call(message, "policy")
              )
                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.policy);
              return writer;
            };

            /**
             * Encodes the specified RiskCtrl message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrl} message RiskCtrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RiskCtrl.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RiskCtrl message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrl} RiskCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RiskCtrl.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.RiskCtrl();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.roomId = reader.int64();
                    break;
                  }
                  case 2: {
                    message.policy = reader.int32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a RiskCtrl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrl} RiskCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RiskCtrl.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RiskCtrl message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RiskCtrl.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (
                  !$util.isInteger(message.roomId) &&
                  !(
                    message.roomId &&
                    $util.isInteger(message.roomId.low) &&
                    $util.isInteger(message.roomId.high)
                  )
                )
                  return "roomId: integer|Long expected";
              if (message.policy != null && message.hasOwnProperty("policy"))
                switch (message.policy) {
                  default:
                    return "policy: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                    break;
                }
              return null;
            };

            /**
             * Creates a RiskCtrl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrl} RiskCtrl
             */
            RiskCtrl.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.RiskCtrl
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.RiskCtrl();
              if (object.roomId != null)
                if ($util.Long)
                  (message.roomId = $util.Long.fromValue(
                    object.roomId
                  )).unsigned = false;
                else if (typeof object.roomId === "string")
                  message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                  message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                  message.roomId = new $util.LongBits(
                    object.roomId.low >>> 0,
                    object.roomId.high >>> 0
                  ).toNumber();
              switch (object.policy) {
                default:
                  if (typeof object.policy === "number") {
                    message.policy = object.policy;
                    break;
                  }
                  break;
                case "RP_NORMAL":
                case 0:
                  message.policy = 0;
                  break;
                case "RP_POLICY":
                case 1:
                  message.policy = 1;
                  break;
                case "RP_SILENCE":
                case 2:
                  message.policy = 2;
                  break;
                case "RP_CNY":
                case 3:
                  message.policy = 3;
                  break;
                case "RP_BIGEV":
                case 4:
                  message.policy = 4;
                  break;
              }
              return message;
            };

            /**
             * Creates a plain object from a RiskCtrl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.RiskCtrl} message RiskCtrl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RiskCtrl.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.roomId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.roomId = options.longs === String ? "0" : 0;
                object.policy = options.enums === String ? "RP_NORMAL" : 0;
              }
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                  object.roomId =
                    options.longs === String
                      ? String(message.roomId)
                      : message.roomId;
                else
                  object.roomId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.roomId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.roomId.low >>> 0,
                          message.roomId.high >>> 0
                        ).toNumber()
                      : message.roomId;
              if (message.policy != null && message.hasOwnProperty("policy"))
                object.policy =
                  options.enums === String
                    ? $root.bilibili.live.component.common_model.user_dagw
                        .RiskPolicyEnum[message.policy] === undefined
                      ? message.policy
                      : $root.bilibili.live.component.common_model.user_dagw
                          .RiskPolicyEnum[message.policy]
                    : message.policy;
              return object;
            };

            /**
             * Converts this RiskCtrl to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RiskCtrl.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for RiskCtrl
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrl
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RiskCtrl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.RiskCtrl"
              );
            };

            return RiskCtrl;
          })();

          user_dagw.RiskCtrlInfo = (function () {
            /**
             * Properties of a RiskCtrlInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IRiskCtrlInfo
             * @property {string|null} [name] RiskCtrlInfo name
             * @property {string|null} [face] RiskCtrlInfo face
             */

            /**
             * Constructs a new RiskCtrlInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a RiskCtrlInfo.
             * @implements IRiskCtrlInfo
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo=} [properties] Properties to set
             */
            function RiskCtrlInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * RiskCtrlInfo name.
             * @member {string} name
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @instance
             */
            RiskCtrlInfo.prototype.name = "";

            /**
             * RiskCtrlInfo face.
             * @member {string} face
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @instance
             */
            RiskCtrlInfo.prototype.face = "";

            /**
             * Creates a new RiskCtrlInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrlInfo} RiskCtrlInfo instance
             */
            RiskCtrlInfo.create = function create(properties) {
              return new RiskCtrlInfo(properties);
            };

            /**
             * Encodes the specified RiskCtrlInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo} message RiskCtrlInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RiskCtrlInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.name != null &&
                Object.hasOwnProperty.call(message, "name")
              )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
              if (
                message.face != null &&
                Object.hasOwnProperty.call(message, "face")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.face);
              return writer;
            };

            /**
             * Encodes the specified RiskCtrlInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo} message RiskCtrlInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RiskCtrlInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RiskCtrlInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrlInfo} RiskCtrlInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RiskCtrlInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.face = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a RiskCtrlInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrlInfo} RiskCtrlInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RiskCtrlInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RiskCtrlInfo message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RiskCtrlInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                  return "name: string expected";
              if (message.face != null && message.hasOwnProperty("face"))
                if (!$util.isString(message.face))
                  return "face: string expected";
              return null;
            };

            /**
             * Creates a RiskCtrlInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.RiskCtrlInfo} RiskCtrlInfo
             */
            RiskCtrlInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .RiskCtrlInfo
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.RiskCtrlInfo();
              if (object.name != null) message.name = String(object.name);
              if (object.face != null) message.face = String(object.face);
              return message;
            };

            /**
             * Creates a plain object from a RiskCtrlInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.RiskCtrlInfo} message RiskCtrlInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RiskCtrlInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.name = "";
                object.face = "";
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.face != null && message.hasOwnProperty("face"))
                object.face = message.face;
              return object;
            };

            /**
             * Converts this RiskCtrlInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RiskCtrlInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for RiskCtrlInfo
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.RiskCtrlInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RiskCtrlInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.RiskCtrlInfo"
              );
            };

            return RiskCtrlInfo;
          })();

          /**
           * RiskPolicyEnum enum.
           * @name bilibili.live.component.common_model.user_dagw.RiskPolicyEnum
           * @enum {number}
           * @property {number} RP_NORMAL=0 RP_NORMAL value
           * @property {number} RP_POLICY=1 RP_POLICY value
           * @property {number} RP_SILENCE=2 RP_SILENCE value
           * @property {number} RP_CNY=3 RP_CNY value
           * @property {number} RP_BIGEV=4 RP_BIGEV value
           */
          user_dagw.RiskPolicyEnum = (function () {
            const valuesById = {},
              values = Object.create(valuesById);
            values[(valuesById[0] = "RP_NORMAL")] = 0;
            values[(valuesById[1] = "RP_POLICY")] = 1;
            values[(valuesById[2] = "RP_SILENCE")] = 2;
            values[(valuesById[3] = "RP_CNY")] = 3;
            values[(valuesById[4] = "RP_BIGEV")] = 4;
            return values;
          })();

          user_dagw.RoomAnonCtrl = (function () {
            /**
             * Properties of a RoomAnonCtrl.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IRoomAnonCtrl
             * @property {bilibili.live.component.common_model.user_dagw.RoomAnonTypeEnum|null} [type] RoomAnonCtrl type
             */

            /**
             * Constructs a new RoomAnonCtrl.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a RoomAnonCtrl.
             * @implements IRoomAnonCtrl
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl=} [properties] Properties to set
             */
            function RoomAnonCtrl(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomAnonCtrl type.
             * @member {bilibili.live.component.common_model.user_dagw.RoomAnonTypeEnum} type
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @instance
             */
            RoomAnonCtrl.prototype.type = 0;

            /**
             * Creates a new RoomAnonCtrl instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.RoomAnonCtrl} RoomAnonCtrl instance
             */
            RoomAnonCtrl.create = function create(properties) {
              return new RoomAnonCtrl(properties);
            };

            /**
             * Encodes the specified RoomAnonCtrl message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl} message RoomAnonCtrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomAnonCtrl.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.type != null &&
                Object.hasOwnProperty.call(message, "type")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
              return writer;
            };

            /**
             * Encodes the specified RoomAnonCtrl message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl} message RoomAnonCtrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomAnonCtrl.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomAnonCtrl message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.RoomAnonCtrl} RoomAnonCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomAnonCtrl.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.type = reader.int32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a RoomAnonCtrl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.RoomAnonCtrl} RoomAnonCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomAnonCtrl.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomAnonCtrl message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomAnonCtrl.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                  default:
                    return "type: enum value expected";
                  case 0:
                  case 1:
                    break;
                }
              return null;
            };

            /**
             * Creates a RoomAnonCtrl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.RoomAnonCtrl} RoomAnonCtrl
             */
            RoomAnonCtrl.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .RoomAnonCtrl
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.RoomAnonCtrl();
              switch (object.type) {
                default:
                  if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                  }
                  break;
                case "RA_ALL":
                case 0:
                  message.type = 0;
                  break;
                case "RA_With_Subject":
                case 1:
                  message.type = 1;
                  break;
              }
              return message;
            };

            /**
             * Creates a plain object from a RoomAnonCtrl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.RoomAnonCtrl} message RoomAnonCtrl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomAnonCtrl.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults)
                object.type = options.enums === String ? "RA_ALL" : 0;
              if (message.type != null && message.hasOwnProperty("type"))
                object.type =
                  options.enums === String
                    ? $root.bilibili.live.component.common_model.user_dagw
                        .RoomAnonTypeEnum[message.type] === undefined
                      ? message.type
                      : $root.bilibili.live.component.common_model.user_dagw
                          .RoomAnonTypeEnum[message.type]
                    : message.type;
              return object;
            };

            /**
             * Converts this RoomAnonCtrl to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomAnonCtrl.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for RoomAnonCtrl
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.RoomAnonCtrl
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RoomAnonCtrl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.RoomAnonCtrl"
              );
            };

            return RoomAnonCtrl;
          })();

          /**
           * RoomAnonTypeEnum enum.
           * @name bilibili.live.component.common_model.user_dagw.RoomAnonTypeEnum
           * @enum {number}
           * @property {number} RA_ALL=0 RA_ALL value
           * @property {number} RA_With_Subject=1 RA_With_Subject value
           */
          user_dagw.RoomAnonTypeEnum = (function () {
            const valuesById = {},
              values = Object.create(valuesById);
            values[(valuesById[0] = "RA_ALL")] = 0;
            values[(valuesById[1] = "RA_With_Subject")] = 1;
            return values;
          })();

          user_dagw.Title = (function () {
            /**
             * Properties of a Title.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface ITitle
             * @property {string|null} [oldTitleCssId] Title oldTitleCssId
             * @property {string|null} [titleCssId] Title titleCssId
             */

            /**
             * Constructs a new Title.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a Title.
             * @implements ITitle
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.ITitle=} [properties] Properties to set
             */
            function Title(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * Title oldTitleCssId.
             * @member {string} oldTitleCssId
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @instance
             */
            Title.prototype.oldTitleCssId = "";

            /**
             * Title titleCssId.
             * @member {string} titleCssId
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @instance
             */
            Title.prototype.titleCssId = "";

            /**
             * Creates a new Title instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitle=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.Title} Title instance
             */
            Title.create = function create(properties) {
              return new Title(properties);
            };

            /**
             * Encodes the specified Title message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Title.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitle} message Title message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Title.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.oldTitleCssId != null &&
                Object.hasOwnProperty.call(message, "oldTitleCssId")
              )
                writer
                  .uint32(/* id 1, wireType 2 =*/ 10)
                  .string(message.oldTitleCssId);
              if (
                message.titleCssId != null &&
                Object.hasOwnProperty.call(message, "titleCssId")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.titleCssId);
              return writer;
            };

            /**
             * Encodes the specified Title message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Title.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitle} message Title message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Title.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Title message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.Title} Title
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Title.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.Title();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.oldTitleCssId = reader.string();
                    break;
                  }
                  case 2: {
                    message.titleCssId = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a Title message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.Title} Title
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Title.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Title message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Title.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (
                message.oldTitleCssId != null &&
                message.hasOwnProperty("oldTitleCssId")
              )
                if (!$util.isString(message.oldTitleCssId))
                  return "oldTitleCssId: string expected";
              if (
                message.titleCssId != null &&
                message.hasOwnProperty("titleCssId")
              )
                if (!$util.isString(message.titleCssId))
                  return "titleCssId: string expected";
              return null;
            };

            /**
             * Creates a Title message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.Title} Title
             */
            Title.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.Title
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.Title();
              if (object.oldTitleCssId != null)
                message.oldTitleCssId = String(object.oldTitleCssId);
              if (object.titleCssId != null)
                message.titleCssId = String(object.titleCssId);
              return message;
            };

            /**
             * Creates a plain object from a Title message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.Title} message Title
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Title.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.oldTitleCssId = "";
                object.titleCssId = "";
              }
              if (
                message.oldTitleCssId != null &&
                message.hasOwnProperty("oldTitleCssId")
              )
                object.oldTitleCssId = message.oldTitleCssId;
              if (
                message.titleCssId != null &&
                message.hasOwnProperty("titleCssId")
              )
                object.titleCssId = message.titleCssId;
              return object;
            };

            /**
             * Converts this Title to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Title.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for Title
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.Title
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Title.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.Title"
              );
            };

            return Title;
          })();

          user_dagw.TitleOption = (function () {
            /**
             * Properties of a TitleOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface ITitleOption
             * @property {number|null} [roomId] TitleOption roomId
             * @property {boolean|null} [strongDepend] TitleOption strongDepend
             */

            /**
             * Constructs a new TitleOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a TitleOption.
             * @implements ITitleOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.ITitleOption=} [properties] Properties to set
             */
            function TitleOption(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * TitleOption roomId.
             * @member {number} roomId
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @instance
             */
            TitleOption.prototype.roomId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * TitleOption strongDepend.
             * @member {boolean} strongDepend
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @instance
             */
            TitleOption.prototype.strongDepend = false;

            /**
             * Creates a new TitleOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitleOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.TitleOption} TitleOption instance
             */
            TitleOption.create = function create(properties) {
              return new TitleOption(properties);
            };

            /**
             * Encodes the specified TitleOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.TitleOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitleOption} message TitleOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TitleOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.roomId != null &&
                Object.hasOwnProperty.call(message, "roomId")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.roomId);
              if (
                message.strongDepend != null &&
                Object.hasOwnProperty.call(message, "strongDepend")
              )
                writer
                  .uint32(/* id 2, wireType 0 =*/ 16)
                  .bool(message.strongDepend);
              return writer;
            };

            /**
             * Encodes the specified TitleOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.TitleOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.ITitleOption} message TitleOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TitleOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TitleOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.TitleOption} TitleOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TitleOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.TitleOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.roomId = reader.int64();
                    break;
                  }
                  case 2: {
                    message.strongDepend = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a TitleOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.TitleOption} TitleOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TitleOption.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TitleOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TitleOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (
                  !$util.isInteger(message.roomId) &&
                  !(
                    message.roomId &&
                    $util.isInteger(message.roomId.low) &&
                    $util.isInteger(message.roomId.high)
                  )
                )
                  return "roomId: integer|Long expected";
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                if (typeof message.strongDepend !== "boolean")
                  return "strongDepend: boolean expected";
              return null;
            };

            /**
             * Creates a TitleOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.TitleOption} TitleOption
             */
            TitleOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.TitleOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.TitleOption();
              if (object.roomId != null)
                if ($util.Long)
                  (message.roomId = $util.Long.fromValue(
                    object.roomId
                  )).unsigned = false;
                else if (typeof object.roomId === "string")
                  message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                  message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                  message.roomId = new $util.LongBits(
                    object.roomId.low >>> 0,
                    object.roomId.high >>> 0
                  ).toNumber();
              if (object.strongDepend != null)
                message.strongDepend = Boolean(object.strongDepend);
              return message;
            };

            /**
             * Creates a plain object from a TitleOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.TitleOption} message TitleOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TitleOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.roomId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.roomId = options.longs === String ? "0" : 0;
                object.strongDepend = false;
              }
              if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                  object.roomId =
                    options.longs === String
                      ? String(message.roomId)
                      : message.roomId;
                else
                  object.roomId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.roomId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.roomId.low >>> 0,
                          message.roomId.high >>> 0
                        ).toNumber()
                      : message.roomId;
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                object.strongDepend = message.strongDepend;
              return object;
            };

            /**
             * Converts this TitleOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TitleOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for TitleOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.TitleOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TitleOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.TitleOption"
              );
            };

            return TitleOption;
          })();

          user_dagw.UserHeadFrame = (function () {
            /**
             * Properties of a UserHeadFrame.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IUserHeadFrame
             * @property {number|null} [id] UserHeadFrame id
             * @property {string|null} [frameImg] UserHeadFrame frameImg
             */

            /**
             * Constructs a new UserHeadFrame.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a UserHeadFrame.
             * @implements IUserHeadFrame
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IUserHeadFrame=} [properties] Properties to set
             */
            function UserHeadFrame(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserHeadFrame id.
             * @member {number} id
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @instance
             */
            UserHeadFrame.prototype.id = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * UserHeadFrame frameImg.
             * @member {string} frameImg
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @instance
             */
            UserHeadFrame.prototype.frameImg = "";

            /**
             * Creates a new UserHeadFrame instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserHeadFrame=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.UserHeadFrame} UserHeadFrame instance
             */
            UserHeadFrame.create = function create(properties) {
              return new UserHeadFrame(properties);
            };

            /**
             * Encodes the specified UserHeadFrame message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserHeadFrame.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserHeadFrame} message UserHeadFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserHeadFrame.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.id != null &&
                Object.hasOwnProperty.call(message, "id")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
              if (
                message.frameImg != null &&
                Object.hasOwnProperty.call(message, "frameImg")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.frameImg);
              return writer;
            };

            /**
             * Encodes the specified UserHeadFrame message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserHeadFrame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserHeadFrame} message UserHeadFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserHeadFrame.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserHeadFrame message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.UserHeadFrame} UserHeadFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserHeadFrame.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.id = reader.int64();
                    break;
                  }
                  case 2: {
                    message.frameImg = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a UserHeadFrame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.UserHeadFrame} UserHeadFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserHeadFrame.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserHeadFrame message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserHeadFrame.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.id != null && message.hasOwnProperty("id"))
                if (
                  !$util.isInteger(message.id) &&
                  !(
                    message.id &&
                    $util.isInteger(message.id.low) &&
                    $util.isInteger(message.id.high)
                  )
                )
                  return "id: integer|Long expected";
              if (
                message.frameImg != null &&
                message.hasOwnProperty("frameImg")
              )
                if (!$util.isString(message.frameImg))
                  return "frameImg: string expected";
              return null;
            };

            /**
             * Creates a UserHeadFrame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.UserHeadFrame} UserHeadFrame
             */
            UserHeadFrame.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .UserHeadFrame
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame();
              if (object.id != null)
                if ($util.Long)
                  (message.id = $util.Long.fromValue(
                    object.id
                  )).unsigned = false;
                else if (typeof object.id === "string")
                  message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number") message.id = object.id;
                else if (typeof object.id === "object")
                  message.id = new $util.LongBits(
                    object.id.low >>> 0,
                    object.id.high >>> 0
                  ).toNumber();
              if (object.frameImg != null)
                message.frameImg = String(object.frameImg);
              return message;
            };

            /**
             * Creates a plain object from a UserHeadFrame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.UserHeadFrame} message UserHeadFrame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserHeadFrame.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.id =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.id = options.longs === String ? "0" : 0;
                object.frameImg = "";
              }
              if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                  object.id =
                    options.longs === String ? String(message.id) : message.id;
                else
                  object.id =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.id)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.id.low >>> 0,
                          message.id.high >>> 0
                        ).toNumber()
                      : message.id;
              if (
                message.frameImg != null &&
                message.hasOwnProperty("frameImg")
              )
                object.frameImg = message.frameImg;
              return object;
            };

            /**
             * Converts this UserHeadFrame to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserHeadFrame.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for UserHeadFrame
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.UserHeadFrame
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserHeadFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.UserHeadFrame"
              );
            };

            return UserHeadFrame;
          })();

          user_dagw.UserInfo = (function () {
            /**
             * Properties of a UserInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IUserInfo
             * @property {number|null} [uid] UserInfo uid
             * @property {bilibili.live.component.common_model.user_dagw.IBase|null} [base] UserInfo base
             * @property {bilibili.live.component.common_model.user_dagw.IMedal|null} [medal] UserInfo medal
             * @property {bilibili.live.component.common_model.user_dagw.IWealth|null} [wealth] UserInfo wealth
             * @property {bilibili.live.component.common_model.user_dagw.ITitle|null} [title] UserInfo title
             * @property {bilibili.live.component.common_model.user_dagw.IGuard|null} [guard] UserInfo guard
             * @property {bilibili.live.component.common_model.user_dagw.IUserHeadFrame|null} [uheadFrame] UserInfo uheadFrame
             * @property {bilibili.live.component.common_model.user_dagw.IGuardLeader|null} [guardLeader] UserInfo guardLeader
             */

            /**
             * Constructs a new UserInfo.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo uid.
             * @member {number} uid
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.uid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * UserInfo base.
             * @member {bilibili.live.component.common_model.user_dagw.IBase|null|undefined} base
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.base = null;

            /**
             * UserInfo medal.
             * @member {bilibili.live.component.common_model.user_dagw.IMedal|null|undefined} medal
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.medal = null;

            /**
             * UserInfo wealth.
             * @member {bilibili.live.component.common_model.user_dagw.IWealth|null|undefined} wealth
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.wealth = null;

            /**
             * UserInfo title.
             * @member {bilibili.live.component.common_model.user_dagw.ITitle|null|undefined} title
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.title = null;

            /**
             * UserInfo guard.
             * @member {bilibili.live.component.common_model.user_dagw.IGuard|null|undefined} guard
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.guard = null;

            /**
             * UserInfo uheadFrame.
             * @member {bilibili.live.component.common_model.user_dagw.IUserHeadFrame|null|undefined} uheadFrame
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.uheadFrame = null;

            /**
             * UserInfo guardLeader.
             * @member {bilibili.live.component.common_model.user_dagw.IGuardLeader|null|undefined} guardLeader
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             */
            UserInfo.prototype.guardLeader = null;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserInfo=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
              return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.uid != null &&
                Object.hasOwnProperty.call(message, "uid")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.uid);
              if (
                message.base != null &&
                Object.hasOwnProperty.call(message, "base")
              )
                $root.bilibili.live.component.common_model.user_dagw.Base.encode(
                  message.base,
                  writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                ).ldelim();
              if (
                message.medal != null &&
                Object.hasOwnProperty.call(message, "medal")
              )
                $root.bilibili.live.component.common_model.user_dagw.Medal.encode(
                  message.medal,
                  writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                ).ldelim();
              if (
                message.wealth != null &&
                Object.hasOwnProperty.call(message, "wealth")
              )
                $root.bilibili.live.component.common_model.user_dagw.Wealth.encode(
                  message.wealth,
                  writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
                ).ldelim();
              if (
                message.title != null &&
                Object.hasOwnProperty.call(message, "title")
              )
                $root.bilibili.live.component.common_model.user_dagw.Title.encode(
                  message.title,
                  writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
                ).ldelim();
              if (
                message.guard != null &&
                Object.hasOwnProperty.call(message, "guard")
              )
                $root.bilibili.live.component.common_model.user_dagw.Guard.encode(
                  message.guard,
                  writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                ).ldelim();
              if (
                message.uheadFrame != null &&
                Object.hasOwnProperty.call(message, "uheadFrame")
              )
                $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame.encode(
                  message.uheadFrame,
                  writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
                ).ldelim();
              if (
                message.guardLeader != null &&
                Object.hasOwnProperty.call(message, "guardLeader")
              )
                $root.bilibili.live.component.common_model.user_dagw.GuardLeader.encode(
                  message.guardLeader,
                  writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
                ).ldelim();
              return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.UserInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.uid = reader.int64();
                    break;
                  }
                  case 2: {
                    message.base =
                      $root.bilibili.live.component.common_model.user_dagw.Base.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 3: {
                    message.medal =
                      $root.bilibili.live.component.common_model.user_dagw.Medal.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 4: {
                    message.wealth =
                      $root.bilibili.live.component.common_model.user_dagw.Wealth.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 5: {
                    message.title =
                      $root.bilibili.live.component.common_model.user_dagw.Title.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 6: {
                    message.guard =
                      $root.bilibili.live.component.common_model.user_dagw.Guard.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 7: {
                    message.uheadFrame =
                      $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  case 8: {
                    message.guardLeader =
                      $root.bilibili.live.component.common_model.user_dagw.GuardLeader.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.uid != null && message.hasOwnProperty("uid"))
                if (
                  !$util.isInteger(message.uid) &&
                  !(
                    message.uid &&
                    $util.isInteger(message.uid.low) &&
                    $util.isInteger(message.uid.high)
                  )
                )
                  return "uid: integer|Long expected";
              if (message.base != null && message.hasOwnProperty("base")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.Base.verify(
                    message.base
                  );
                if (error) return "base." + error;
              }
              if (message.medal != null && message.hasOwnProperty("medal")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.Medal.verify(
                    message.medal
                  );
                if (error) return "medal." + error;
              }
              if (message.wealth != null && message.hasOwnProperty("wealth")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.Wealth.verify(
                    message.wealth
                  );
                if (error) return "wealth." + error;
              }
              if (message.title != null && message.hasOwnProperty("title")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.Title.verify(
                    message.title
                  );
                if (error) return "title." + error;
              }
              if (message.guard != null && message.hasOwnProperty("guard")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.Guard.verify(
                    message.guard
                  );
                if (error) return "guard." + error;
              }
              if (
                message.uheadFrame != null &&
                message.hasOwnProperty("uheadFrame")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame.verify(
                    message.uheadFrame
                  );
                if (error) return "uheadFrame." + error;
              }
              if (
                message.guardLeader != null &&
                message.hasOwnProperty("guardLeader")
              ) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.GuardLeader.verify(
                    message.guardLeader
                  );
                if (error) return "guardLeader." + error;
              }
              return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.UserInfo
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.UserInfo();
              if (object.uid != null)
                if ($util.Long)
                  (message.uid = $util.Long.fromValue(
                    object.uid
                  )).unsigned = false;
                else if (typeof object.uid === "string")
                  message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                  message.uid = object.uid;
                else if (typeof object.uid === "object")
                  message.uid = new $util.LongBits(
                    object.uid.low >>> 0,
                    object.uid.high >>> 0
                  ).toNumber();
              if (object.base != null) {
                if (typeof object.base !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.base: object expected"
                  );
                message.base =
                  $root.bilibili.live.component.common_model.user_dagw.Base.fromObject(
                    object.base
                  );
              }
              if (object.medal != null) {
                if (typeof object.medal !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.medal: object expected"
                  );
                message.medal =
                  $root.bilibili.live.component.common_model.user_dagw.Medal.fromObject(
                    object.medal
                  );
              }
              if (object.wealth != null) {
                if (typeof object.wealth !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.wealth: object expected"
                  );
                message.wealth =
                  $root.bilibili.live.component.common_model.user_dagw.Wealth.fromObject(
                    object.wealth
                  );
              }
              if (object.title != null) {
                if (typeof object.title !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.title: object expected"
                  );
                message.title =
                  $root.bilibili.live.component.common_model.user_dagw.Title.fromObject(
                    object.title
                  );
              }
              if (object.guard != null) {
                if (typeof object.guard !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.guard: object expected"
                  );
                message.guard =
                  $root.bilibili.live.component.common_model.user_dagw.Guard.fromObject(
                    object.guard
                  );
              }
              if (object.uheadFrame != null) {
                if (typeof object.uheadFrame !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.uheadFrame: object expected"
                  );
                message.uheadFrame =
                  $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame.fromObject(
                    object.uheadFrame
                  );
              }
              if (object.guardLeader != null) {
                if (typeof object.guardLeader !== "object")
                  throw TypeError(
                    ".bilibili.live.component.common_model.user_dagw.UserInfo.guardLeader: object expected"
                  );
                message.guardLeader =
                  $root.bilibili.live.component.common_model.user_dagw.GuardLeader.fromObject(
                    object.guardLeader
                  );
              }
              return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.uid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.uid = options.longs === String ? "0" : 0;
                object.base = null;
                object.medal = null;
                object.wealth = null;
                object.title = null;
                object.guard = null;
                object.uheadFrame = null;
                object.guardLeader = null;
              }
              if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                  object.uid =
                    options.longs === String
                      ? String(message.uid)
                      : message.uid;
                else
                  object.uid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.uid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.uid.low >>> 0,
                          message.uid.high >>> 0
                        ).toNumber()
                      : message.uid;
              if (message.base != null && message.hasOwnProperty("base"))
                object.base =
                  $root.bilibili.live.component.common_model.user_dagw.Base.toObject(
                    message.base,
                    options
                  );
              if (message.medal != null && message.hasOwnProperty("medal"))
                object.medal =
                  $root.bilibili.live.component.common_model.user_dagw.Medal.toObject(
                    message.medal,
                    options
                  );
              if (message.wealth != null && message.hasOwnProperty("wealth"))
                object.wealth =
                  $root.bilibili.live.component.common_model.user_dagw.Wealth.toObject(
                    message.wealth,
                    options
                  );
              if (message.title != null && message.hasOwnProperty("title"))
                object.title =
                  $root.bilibili.live.component.common_model.user_dagw.Title.toObject(
                    message.title,
                    options
                  );
              if (message.guard != null && message.hasOwnProperty("guard"))
                object.guard =
                  $root.bilibili.live.component.common_model.user_dagw.Guard.toObject(
                    message.guard,
                    options
                  );
              if (
                message.uheadFrame != null &&
                message.hasOwnProperty("uheadFrame")
              )
                object.uheadFrame =
                  $root.bilibili.live.component.common_model.user_dagw.UserHeadFrame.toObject(
                    message.uheadFrame,
                    options
                  );
              if (
                message.guardLeader != null &&
                message.hasOwnProperty("guardLeader")
              )
                object.guardLeader =
                  $root.bilibili.live.component.common_model.user_dagw.GuardLeader.toObject(
                    message.guardLeader,
                    options
                  );
              return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for UserInfo
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.UserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.UserInfo"
              );
            };

            return UserInfo;
          })();

          user_dagw.Wealth = (function () {
            /**
             * Properties of a Wealth.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IWealth
             * @property {number|null} [level] Wealth level
             * @property {string|null} [dmIconKey] Wealth dmIconKey
             */

            /**
             * Constructs a new Wealth.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a Wealth.
             * @implements IWealth
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IWealth=} [properties] Properties to set
             */
            function Wealth(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * Wealth level.
             * @member {number} level
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @instance
             */
            Wealth.prototype.level = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Wealth dmIconKey.
             * @member {string} dmIconKey
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @instance
             */
            Wealth.prototype.dmIconKey = "";

            /**
             * Creates a new Wealth instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealth=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.Wealth} Wealth instance
             */
            Wealth.create = function create(properties) {
              return new Wealth(properties);
            };

            /**
             * Encodes the specified Wealth message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Wealth.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealth} message Wealth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Wealth.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.level != null &&
                Object.hasOwnProperty.call(message, "level")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.level);
              if (
                message.dmIconKey != null &&
                Object.hasOwnProperty.call(message, "dmIconKey")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.dmIconKey);
              return writer;
            };

            /**
             * Encodes the specified Wealth message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Wealth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealth} message Wealth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Wealth.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Wealth message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.Wealth} Wealth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Wealth.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.Wealth();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.level = reader.int64();
                    break;
                  }
                  case 2: {
                    message.dmIconKey = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a Wealth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.Wealth} Wealth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Wealth.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Wealth message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Wealth.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.level != null && message.hasOwnProperty("level"))
                if (
                  !$util.isInteger(message.level) &&
                  !(
                    message.level &&
                    $util.isInteger(message.level.low) &&
                    $util.isInteger(message.level.high)
                  )
                )
                  return "level: integer|Long expected";
              if (
                message.dmIconKey != null &&
                message.hasOwnProperty("dmIconKey")
              )
                if (!$util.isString(message.dmIconKey))
                  return "dmIconKey: string expected";
              return null;
            };

            /**
             * Creates a Wealth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.Wealth} Wealth
             */
            Wealth.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw.Wealth
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.Wealth();
              if (object.level != null)
                if ($util.Long)
                  (message.level = $util.Long.fromValue(
                    object.level
                  )).unsigned = false;
                else if (typeof object.level === "string")
                  message.level = parseInt(object.level, 10);
                else if (typeof object.level === "number")
                  message.level = object.level;
                else if (typeof object.level === "object")
                  message.level = new $util.LongBits(
                    object.level.low >>> 0,
                    object.level.high >>> 0
                  ).toNumber();
              if (object.dmIconKey != null)
                message.dmIconKey = String(object.dmIconKey);
              return message;
            };

            /**
             * Creates a plain object from a Wealth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.Wealth} message Wealth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Wealth.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.level =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.level = options.longs === String ? "0" : 0;
                object.dmIconKey = "";
              }
              if (message.level != null && message.hasOwnProperty("level"))
                if (typeof message.level === "number")
                  object.level =
                    options.longs === String
                      ? String(message.level)
                      : message.level;
                else
                  object.level =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.level)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.level.low >>> 0,
                          message.level.high >>> 0
                        ).toNumber()
                      : message.level;
              if (
                message.dmIconKey != null &&
                message.hasOwnProperty("dmIconKey")
              )
                object.dmIconKey = message.dmIconKey;
              return object;
            };

            /**
             * Converts this Wealth to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Wealth.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for Wealth
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.Wealth
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Wealth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.Wealth"
              );
            };

            return Wealth;
          })();

          user_dagw.WealthOption = (function () {
            /**
             * Properties of a WealthOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @interface IWealthOption
             * @property {number|null} [roomid] WealthOption roomid
             * @property {number|null} [viewUid] WealthOption viewUid
             * @property {number|null} [ruid] WealthOption ruid
             * @property {boolean|null} [strongDepend] WealthOption strongDepend
             */

            /**
             * Constructs a new WealthOption.
             * @memberof bilibili.live.component.common_model.user_dagw
             * @classdesc Represents a WealthOption.
             * @implements IWealthOption
             * @constructor
             * @param {bilibili.live.component.common_model.user_dagw.IWealthOption=} [properties] Properties to set
             */
            function WealthOption(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * WealthOption roomid.
             * @member {number} roomid
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @instance
             */
            WealthOption.prototype.roomid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * WealthOption viewUid.
             * @member {number} viewUid
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @instance
             */
            WealthOption.prototype.viewUid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * WealthOption ruid.
             * @member {number} ruid
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @instance
             */
            WealthOption.prototype.ruid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * WealthOption strongDepend.
             * @member {boolean} strongDepend
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @instance
             */
            WealthOption.prototype.strongDepend = false;

            /**
             * Creates a new WealthOption instance using the specified properties.
             * @function create
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealthOption=} [properties] Properties to set
             * @returns {bilibili.live.component.common_model.user_dagw.WealthOption} WealthOption instance
             */
            WealthOption.create = function create(properties) {
              return new WealthOption(properties);
            };

            /**
             * Encodes the specified WealthOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.WealthOption.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealthOption} message WealthOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WealthOption.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.roomid != null &&
                Object.hasOwnProperty.call(message, "roomid")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.roomid);
              if (
                message.viewUid != null &&
                Object.hasOwnProperty.call(message, "viewUid")
              )
                writer
                  .uint32(/* id 2, wireType 0 =*/ 16)
                  .int64(message.viewUid);
              if (
                message.ruid != null &&
                Object.hasOwnProperty.call(message, "ruid")
              )
                writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.ruid);
              if (
                message.strongDepend != null &&
                Object.hasOwnProperty.call(message, "strongDepend")
              )
                writer
                  .uint32(/* id 4, wireType 0 =*/ 32)
                  .bool(message.strongDepend);
              return writer;
            };

            /**
             * Encodes the specified WealthOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.WealthOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.IWealthOption} message WealthOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WealthOption.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WealthOption message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.component.common_model.user_dagw.WealthOption} WealthOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WealthOption.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.component.common_model.user_dagw.WealthOption();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.roomid = reader.int64();
                    break;
                  }
                  case 2: {
                    message.viewUid = reader.int64();
                    break;
                  }
                  case 3: {
                    message.ruid = reader.int64();
                    break;
                  }
                  case 4: {
                    message.strongDepend = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a WealthOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.component.common_model.user_dagw.WealthOption} WealthOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WealthOption.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WealthOption message.
             * @function verify
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WealthOption.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (
                  !$util.isInteger(message.roomid) &&
                  !(
                    message.roomid &&
                    $util.isInteger(message.roomid.low) &&
                    $util.isInteger(message.roomid.high)
                  )
                )
                  return "roomid: integer|Long expected";
              if (message.viewUid != null && message.hasOwnProperty("viewUid"))
                if (
                  !$util.isInteger(message.viewUid) &&
                  !(
                    message.viewUid &&
                    $util.isInteger(message.viewUid.low) &&
                    $util.isInteger(message.viewUid.high)
                  )
                )
                  return "viewUid: integer|Long expected";
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (
                  !$util.isInteger(message.ruid) &&
                  !(
                    message.ruid &&
                    $util.isInteger(message.ruid.low) &&
                    $util.isInteger(message.ruid.high)
                  )
                )
                  return "ruid: integer|Long expected";
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                if (typeof message.strongDepend !== "boolean")
                  return "strongDepend: boolean expected";
              return null;
            };

            /**
             * Creates a WealthOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.component.common_model.user_dagw.WealthOption} WealthOption
             */
            WealthOption.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.component.common_model.user_dagw
                  .WealthOption
              )
                return object;
              let message =
                new $root.bilibili.live.component.common_model.user_dagw.WealthOption();
              if (object.roomid != null)
                if ($util.Long)
                  (message.roomid = $util.Long.fromValue(
                    object.roomid
                  )).unsigned = false;
                else if (typeof object.roomid === "string")
                  message.roomid = parseInt(object.roomid, 10);
                else if (typeof object.roomid === "number")
                  message.roomid = object.roomid;
                else if (typeof object.roomid === "object")
                  message.roomid = new $util.LongBits(
                    object.roomid.low >>> 0,
                    object.roomid.high >>> 0
                  ).toNumber();
              if (object.viewUid != null)
                if ($util.Long)
                  (message.viewUid = $util.Long.fromValue(
                    object.viewUid
                  )).unsigned = false;
                else if (typeof object.viewUid === "string")
                  message.viewUid = parseInt(object.viewUid, 10);
                else if (typeof object.viewUid === "number")
                  message.viewUid = object.viewUid;
                else if (typeof object.viewUid === "object")
                  message.viewUid = new $util.LongBits(
                    object.viewUid.low >>> 0,
                    object.viewUid.high >>> 0
                  ).toNumber();
              if (object.ruid != null)
                if ($util.Long)
                  (message.ruid = $util.Long.fromValue(
                    object.ruid
                  )).unsigned = false;
                else if (typeof object.ruid === "string")
                  message.ruid = parseInt(object.ruid, 10);
                else if (typeof object.ruid === "number")
                  message.ruid = object.ruid;
                else if (typeof object.ruid === "object")
                  message.ruid = new $util.LongBits(
                    object.ruid.low >>> 0,
                    object.ruid.high >>> 0
                  ).toNumber();
              if (object.strongDepend != null)
                message.strongDepend = Boolean(object.strongDepend);
              return message;
            };

            /**
             * Creates a plain object from a WealthOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {bilibili.live.component.common_model.user_dagw.WealthOption} message WealthOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WealthOption.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.roomid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.roomid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.viewUid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.viewUid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.ruid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.ruid = options.longs === String ? "0" : 0;
                object.strongDepend = false;
              }
              if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (typeof message.roomid === "number")
                  object.roomid =
                    options.longs === String
                      ? String(message.roomid)
                      : message.roomid;
                else
                  object.roomid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.roomid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.roomid.low >>> 0,
                          message.roomid.high >>> 0
                        ).toNumber()
                      : message.roomid;
              if (message.viewUid != null && message.hasOwnProperty("viewUid"))
                if (typeof message.viewUid === "number")
                  object.viewUid =
                    options.longs === String
                      ? String(message.viewUid)
                      : message.viewUid;
                else
                  object.viewUid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.viewUid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.viewUid.low >>> 0,
                          message.viewUid.high >>> 0
                        ).toNumber()
                      : message.viewUid;
              if (message.ruid != null && message.hasOwnProperty("ruid"))
                if (typeof message.ruid === "number")
                  object.ruid =
                    options.longs === String
                      ? String(message.ruid)
                      : message.ruid;
                else
                  object.ruid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.ruid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.ruid.low >>> 0,
                          message.ruid.high >>> 0
                        ).toNumber()
                      : message.ruid;
              if (
                message.strongDepend != null &&
                message.hasOwnProperty("strongDepend")
              )
                object.strongDepend = message.strongDepend;
              return object;
            };

            /**
             * Converts this WealthOption to JSON.
             * @function toJSON
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WealthOption.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for WealthOption
             * @function getTypeUrl
             * @memberof bilibili.live.component.common_model.user_dagw.WealthOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WealthOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.component.common_model.user_dagw.WealthOption"
              );
            };

            return WealthOption;
          })();

          return user_dagw;
        })();

        return common_model;
      })();

      return component;
    })();

    live.rankdb = (function () {
      /**
       * Namespace rankdb.
       * @memberof bilibili.live
       * @namespace
       */
      const rankdb = {};

      rankdb.v1 = (function () {
        /**
         * Namespace v1.
         * @memberof bilibili.live.rankdb
         * @namespace
         */
        const v1 = {};

        v1.GoldRankBroadcast = (function () {
          /**
           * Properties of a GoldRankBroadcast.
           * @memberof bilibili.live.rankdb.v1
           * @interface IGoldRankBroadcast
           * @property {string|null} [rankType] GoldRankBroadcast rankType
           * @property {Array.<bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem>|null} [list] GoldRankBroadcast list
           * @property {Array.<bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem>|null} [onlineList] GoldRankBroadcast onlineList
           */

          /**
           * Constructs a new GoldRankBroadcast.
           * @memberof bilibili.live.rankdb.v1
           * @classdesc Represents a GoldRankBroadcast.
           * @implements IGoldRankBroadcast
           * @constructor
           * @param {bilibili.live.rankdb.v1.IGoldRankBroadcast=} [properties] Properties to set
           */
          function GoldRankBroadcast(properties) {
            this.list = [];
            this.onlineList = [];
            if (properties)
              for (
                let keys = Object.keys(properties), i = 0;
                i < keys.length;
                ++i
              )
                if (properties[keys[i]] != null)
                  this[keys[i]] = properties[keys[i]];
          }

          /**
           * GoldRankBroadcast rankType.
           * @member {string} rankType
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @instance
           */
          GoldRankBroadcast.prototype.rankType = "";

          /**
           * GoldRankBroadcast list.
           * @member {Array.<bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem>} list
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @instance
           */
          GoldRankBroadcast.prototype.list = $util.emptyArray;

          /**
           * GoldRankBroadcast onlineList.
           * @member {Array.<bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem>} onlineList
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @instance
           */
          GoldRankBroadcast.prototype.onlineList = $util.emptyArray;

          /**
           * Creates a new GoldRankBroadcast instance using the specified properties.
           * @function create
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {bilibili.live.rankdb.v1.IGoldRankBroadcast=} [properties] Properties to set
           * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast} GoldRankBroadcast instance
           */
          GoldRankBroadcast.create = function create(properties) {
            return new GoldRankBroadcast(properties);
          };

          /**
           * Encodes the specified GoldRankBroadcast message. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.verify|verify} messages.
           * @function encode
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {bilibili.live.rankdb.v1.IGoldRankBroadcast} message GoldRankBroadcast message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */
          GoldRankBroadcast.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (
              message.rankType != null &&
              Object.hasOwnProperty.call(message, "rankType")
            )
              writer
                .uint32(/* id 1, wireType 2 =*/ 10)
                .string(message.rankType);
            if (message.list != null && message.list.length)
              for (let i = 0; i < message.list.length; ++i)
                $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.encode(
                  message.list[i],
                  writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                ).ldelim();
            if (message.onlineList != null && message.onlineList.length)
              for (let i = 0; i < message.onlineList.length; ++i)
                $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.encode(
                  message.onlineList[i],
                  writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                ).ldelim();
            return writer;
          };

          /**
           * Encodes the specified GoldRankBroadcast message, length delimited. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.verify|verify} messages.
           * @function encodeDelimited
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {bilibili.live.rankdb.v1.IGoldRankBroadcast} message GoldRankBroadcast message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */
          GoldRankBroadcast.encodeDelimited = function encodeDelimited(
            message,
            writer
          ) {
            return this.encode(message, writer).ldelim();
          };

          /**
           * Decodes a GoldRankBroadcast message from the specified reader or buffer.
           * @function decode
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast} GoldRankBroadcast
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          GoldRankBroadcast.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
              message = new $root.bilibili.live.rankdb.v1.GoldRankBroadcast();
            while (reader.pos < end) {
              let tag = reader.uint32();
              if (tag === error) break;
              switch (tag >>> 3) {
                case 1: {
                  message.rankType = reader.string();
                  break;
                }
                case 2: {
                  if (!(message.list && message.list.length)) message.list = [];
                  message.list.push(
                    $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.decode(
                      reader,
                      reader.uint32()
                    )
                  );
                  break;
                }
                case 3: {
                  if (!(message.onlineList && message.onlineList.length))
                    message.onlineList = [];
                  message.onlineList.push(
                    $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.decode(
                      reader,
                      reader.uint32()
                    )
                  );
                  break;
                }
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return message;
          };

          /**
           * Decodes a GoldRankBroadcast message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast} GoldRankBroadcast
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          GoldRankBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };

          /**
           * Verifies a GoldRankBroadcast message.
           * @function verify
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */
          GoldRankBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
              return "object expected";
            if (message.rankType != null && message.hasOwnProperty("rankType"))
              if (!$util.isString(message.rankType))
                return "rankType: string expected";
            if (message.list != null && message.hasOwnProperty("list")) {
              if (!Array.isArray(message.list)) return "list: array expected";
              for (let i = 0; i < message.list.length; ++i) {
                let error =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify(
                    message.list[i]
                  );
                if (error) return "list." + error;
              }
            }
            if (
              message.onlineList != null &&
              message.hasOwnProperty("onlineList")
            ) {
              if (!Array.isArray(message.onlineList))
                return "onlineList: array expected";
              for (let i = 0; i < message.onlineList.length; ++i) {
                let error =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify(
                    message.onlineList[i]
                  );
                if (error) return "onlineList." + error;
              }
            }
            return null;
          };

          /**
           * Creates a GoldRankBroadcast message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast} GoldRankBroadcast
           */
          GoldRankBroadcast.fromObject = function fromObject(object) {
            if (
              object instanceof $root.bilibili.live.rankdb.v1.GoldRankBroadcast
            )
              return object;
            let message = new $root.bilibili.live.rankdb.v1.GoldRankBroadcast();
            if (object.rankType != null)
              message.rankType = String(object.rankType);
            if (object.list) {
              if (!Array.isArray(object.list))
                throw TypeError(
                  ".bilibili.live.rankdb.v1.GoldRankBroadcast.list: array expected"
                );
              message.list = [];
              for (let i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                  throw TypeError(
                    ".bilibili.live.rankdb.v1.GoldRankBroadcast.list: object expected"
                  );
                message.list[i] =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.fromObject(
                    object.list[i]
                  );
              }
            }
            if (object.onlineList) {
              if (!Array.isArray(object.onlineList))
                throw TypeError(
                  ".bilibili.live.rankdb.v1.GoldRankBroadcast.onlineList: array expected"
                );
              message.onlineList = [];
              for (let i = 0; i < object.onlineList.length; ++i) {
                if (typeof object.onlineList[i] !== "object")
                  throw TypeError(
                    ".bilibili.live.rankdb.v1.GoldRankBroadcast.onlineList: object expected"
                  );
                message.onlineList[i] =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.fromObject(
                    object.onlineList[i]
                  );
              }
            }
            return message;
          };

          /**
           * Creates a plain object from a GoldRankBroadcast message. Also converts values to other types if specified.
           * @function toObject
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {bilibili.live.rankdb.v1.GoldRankBroadcast} message GoldRankBroadcast
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */
          GoldRankBroadcast.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) {
              object.list = [];
              object.onlineList = [];
            }
            if (options.defaults) object.rankType = "";
            if (message.rankType != null && message.hasOwnProperty("rankType"))
              object.rankType = message.rankType;
            if (message.list && message.list.length) {
              object.list = [];
              for (let j = 0; j < message.list.length; ++j)
                object.list[j] =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.toObject(
                    message.list[j],
                    options
                  );
            }
            if (message.onlineList && message.onlineList.length) {
              object.onlineList = [];
              for (let j = 0; j < message.onlineList.length; ++j)
                object.onlineList[j] =
                  $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.toObject(
                    message.onlineList[j],
                    options
                  );
            }
            return object;
          };

          /**
           * Converts this GoldRankBroadcast to JSON.
           * @function toJSON
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @instance
           * @returns {Object.<string,*>} JSON object
           */
          GoldRankBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };

          /**
           * Gets the default type url for GoldRankBroadcast
           * @function getTypeUrl
           * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
           * @static
           * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
           * @returns {string} The default type url
           */
          GoldRankBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
              typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.live.rankdb.v1.GoldRankBroadcast";
          };

          GoldRankBroadcast.GoldRankBroadcastItem = (function () {
            /**
             * Properties of a GoldRankBroadcastItem.
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
             * @interface IGoldRankBroadcastItem
             * @property {number|null} [uid] GoldRankBroadcastItem uid
             * @property {string|null} [face] GoldRankBroadcastItem face
             * @property {string|null} [score] GoldRankBroadcastItem score
             * @property {string|null} [uname] GoldRankBroadcastItem uname
             * @property {number|null} [rank] GoldRankBroadcastItem rank
             * @property {number|null} [guardLevel] GoldRankBroadcastItem guardLevel
             * @property {boolean|null} [isMystery] GoldRankBroadcastItem isMystery
             * @property {bilibili.live.component.common_model.user_dagw.IUserInfo|null} [uinfo] GoldRankBroadcastItem uinfo
             */

            /**
             * Constructs a new GoldRankBroadcastItem.
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast
             * @classdesc Represents a GoldRankBroadcastItem.
             * @implements IGoldRankBroadcastItem
             * @constructor
             * @param {bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem=} [properties] Properties to set
             */
            function GoldRankBroadcastItem(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * GoldRankBroadcastItem uid.
             * @member {number} uid
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.uid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GoldRankBroadcastItem face.
             * @member {string} face
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.face = "";

            /**
             * GoldRankBroadcastItem score.
             * @member {string} score
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.score = "";

            /**
             * GoldRankBroadcastItem uname.
             * @member {string} uname
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.uname = "";

            /**
             * GoldRankBroadcastItem rank.
             * @member {number} rank
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.rank = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GoldRankBroadcastItem guardLevel.
             * @member {number} guardLevel
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.guardLevel = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * GoldRankBroadcastItem isMystery.
             * @member {boolean} isMystery
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.isMystery = false;

            /**
             * GoldRankBroadcastItem uinfo.
             * @member {bilibili.live.component.common_model.user_dagw.IUserInfo|null|undefined} uinfo
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             */
            GoldRankBroadcastItem.prototype.uinfo = null;

            /**
             * Creates a new GoldRankBroadcastItem instance using the specified properties.
             * @function create
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem=} [properties] Properties to set
             * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem} GoldRankBroadcastItem instance
             */
            GoldRankBroadcastItem.create = function create(properties) {
              return new GoldRankBroadcastItem(properties);
            };

            /**
             * Encodes the specified GoldRankBroadcastItem message. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem} message GoldRankBroadcastItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GoldRankBroadcastItem.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.uid != null &&
                Object.hasOwnProperty.call(message, "uid")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.uid);
              if (
                message.face != null &&
                Object.hasOwnProperty.call(message, "face")
              )
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.face);
              if (
                message.score != null &&
                Object.hasOwnProperty.call(message, "score")
              )
                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.score);
              if (
                message.uname != null &&
                Object.hasOwnProperty.call(message, "uname")
              )
                writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.uname);
              if (
                message.rank != null &&
                Object.hasOwnProperty.call(message, "rank")
              )
                writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.rank);
              if (
                message.guardLevel != null &&
                Object.hasOwnProperty.call(message, "guardLevel")
              )
                writer
                  .uint32(/* id 6, wireType 0 =*/ 48)
                  .int64(message.guardLevel);
              if (
                message.isMystery != null &&
                Object.hasOwnProperty.call(message, "isMystery")
              )
                writer
                  .uint32(/* id 7, wireType 0 =*/ 56)
                  .bool(message.isMystery);
              if (
                message.uinfo != null &&
                Object.hasOwnProperty.call(message, "uinfo")
              )
                $root.bilibili.live.component.common_model.user_dagw.UserInfo.encode(
                  message.uinfo,
                  writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
                ).ldelim();
              return writer;
            };

            /**
             * Encodes the specified GoldRankBroadcastItem message, length delimited. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem} message GoldRankBroadcastItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GoldRankBroadcastItem.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GoldRankBroadcastItem message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem} GoldRankBroadcastItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GoldRankBroadcastItem.decode = function decode(
              reader,
              length,
              error
            ) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.uid = reader.int64();
                    break;
                  }
                  case 2: {
                    message.face = reader.string();
                    break;
                  }
                  case 3: {
                    message.score = reader.string();
                    break;
                  }
                  case 4: {
                    message.uname = reader.string();
                    break;
                  }
                  case 5: {
                    message.rank = reader.int64();
                    break;
                  }
                  case 6: {
                    message.guardLevel = reader.int64();
                    break;
                  }
                  case 7: {
                    message.isMystery = reader.bool();
                    break;
                  }
                  case 8: {
                    message.uinfo =
                      $root.bilibili.live.component.common_model.user_dagw.UserInfo.decode(
                        reader,
                        reader.uint32()
                      );
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a GoldRankBroadcastItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem} GoldRankBroadcastItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GoldRankBroadcastItem.decodeDelimited = function decodeDelimited(
              reader
            ) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GoldRankBroadcastItem message.
             * @function verify
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GoldRankBroadcastItem.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.uid != null && message.hasOwnProperty("uid"))
                if (
                  !$util.isInteger(message.uid) &&
                  !(
                    message.uid &&
                    $util.isInteger(message.uid.low) &&
                    $util.isInteger(message.uid.high)
                  )
                )
                  return "uid: integer|Long expected";
              if (message.face != null && message.hasOwnProperty("face"))
                if (!$util.isString(message.face))
                  return "face: string expected";
              if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isString(message.score))
                  return "score: string expected";
              if (message.uname != null && message.hasOwnProperty("uname"))
                if (!$util.isString(message.uname))
                  return "uname: string expected";
              if (message.rank != null && message.hasOwnProperty("rank"))
                if (
                  !$util.isInteger(message.rank) &&
                  !(
                    message.rank &&
                    $util.isInteger(message.rank.low) &&
                    $util.isInteger(message.rank.high)
                  )
                )
                  return "rank: integer|Long expected";
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (
                  !$util.isInteger(message.guardLevel) &&
                  !(
                    message.guardLevel &&
                    $util.isInteger(message.guardLevel.low) &&
                    $util.isInteger(message.guardLevel.high)
                  )
                )
                  return "guardLevel: integer|Long expected";
              if (
                message.isMystery != null &&
                message.hasOwnProperty("isMystery")
              )
                if (typeof message.isMystery !== "boolean")
                  return "isMystery: boolean expected";
              if (message.uinfo != null && message.hasOwnProperty("uinfo")) {
                let error =
                  $root.bilibili.live.component.common_model.user_dagw.UserInfo.verify(
                    message.uinfo
                  );
                if (error) return "uinfo." + error;
              }
              return null;
            };

            /**
             * Creates a GoldRankBroadcastItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem} GoldRankBroadcastItem
             */
            GoldRankBroadcastItem.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.rankdb.v1.GoldRankBroadcast
                  .GoldRankBroadcastItem
              )
                return object;
              let message =
                new $root.bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem();
              if (object.uid != null)
                if ($util.Long)
                  (message.uid = $util.Long.fromValue(
                    object.uid
                  )).unsigned = false;
                else if (typeof object.uid === "string")
                  message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                  message.uid = object.uid;
                else if (typeof object.uid === "object")
                  message.uid = new $util.LongBits(
                    object.uid.low >>> 0,
                    object.uid.high >>> 0
                  ).toNumber();
              if (object.face != null) message.face = String(object.face);
              if (object.score != null) message.score = String(object.score);
              if (object.uname != null) message.uname = String(object.uname);
              if (object.rank != null)
                if ($util.Long)
                  (message.rank = $util.Long.fromValue(
                    object.rank
                  )).unsigned = false;
                else if (typeof object.rank === "string")
                  message.rank = parseInt(object.rank, 10);
                else if (typeof object.rank === "number")
                  message.rank = object.rank;
                else if (typeof object.rank === "object")
                  message.rank = new $util.LongBits(
                    object.rank.low >>> 0,
                    object.rank.high >>> 0
                  ).toNumber();
              if (object.guardLevel != null)
                if ($util.Long)
                  (message.guardLevel = $util.Long.fromValue(
                    object.guardLevel
                  )).unsigned = false;
                else if (typeof object.guardLevel === "string")
                  message.guardLevel = parseInt(object.guardLevel, 10);
                else if (typeof object.guardLevel === "number")
                  message.guardLevel = object.guardLevel;
                else if (typeof object.guardLevel === "object")
                  message.guardLevel = new $util.LongBits(
                    object.guardLevel.low >>> 0,
                    object.guardLevel.high >>> 0
                  ).toNumber();
              if (object.isMystery != null)
                message.isMystery = Boolean(object.isMystery);
              if (object.uinfo != null) {
                if (typeof object.uinfo !== "object")
                  throw TypeError(
                    ".bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.uinfo: object expected"
                  );
                message.uinfo =
                  $root.bilibili.live.component.common_model.user_dagw.UserInfo.fromObject(
                    object.uinfo
                  );
              }
              return message;
            };

            /**
             * Creates a plain object from a GoldRankBroadcastItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem} message GoldRankBroadcastItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GoldRankBroadcastItem.toObject = function toObject(
              message,
              options
            ) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.uid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.uid = options.longs === String ? "0" : 0;
                object.face = "";
                object.score = "";
                object.uname = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.rank =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.rank = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.guardLevel =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.guardLevel = options.longs === String ? "0" : 0;
                object.isMystery = false;
                object.uinfo = null;
              }
              if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                  object.uid =
                    options.longs === String
                      ? String(message.uid)
                      : message.uid;
                else
                  object.uid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.uid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.uid.low >>> 0,
                          message.uid.high >>> 0
                        ).toNumber()
                      : message.uid;
              if (message.face != null && message.hasOwnProperty("face"))
                object.face = message.face;
              if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
              if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
              if (message.rank != null && message.hasOwnProperty("rank"))
                if (typeof message.rank === "number")
                  object.rank =
                    options.longs === String
                      ? String(message.rank)
                      : message.rank;
                else
                  object.rank =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.rank)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.rank.low >>> 0,
                          message.rank.high >>> 0
                        ).toNumber()
                      : message.rank;
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (typeof message.guardLevel === "number")
                  object.guardLevel =
                    options.longs === String
                      ? String(message.guardLevel)
                      : message.guardLevel;
                else
                  object.guardLevel =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.guardLevel)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.guardLevel.low >>> 0,
                          message.guardLevel.high >>> 0
                        ).toNumber()
                      : message.guardLevel;
              if (
                message.isMystery != null &&
                message.hasOwnProperty("isMystery")
              )
                object.isMystery = message.isMystery;
              if (message.uinfo != null && message.hasOwnProperty("uinfo"))
                object.uinfo =
                  $root.bilibili.live.component.common_model.user_dagw.UserInfo.toObject(
                    message.uinfo,
                    options
                  );
              return object;
            };

            /**
             * Converts this GoldRankBroadcastItem to JSON.
             * @function toJSON
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GoldRankBroadcastItem.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for GoldRankBroadcastItem
             * @function getTypeUrl
             * @memberof bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GoldRankBroadcastItem.getTypeUrl = function getTypeUrl(
              typeUrlPrefix
            ) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem"
              );
            };

            return GoldRankBroadcastItem;
          })();

          return GoldRankBroadcast;
        })();

        return v1;
      })();

      return rankdb;
    })();

    live.xuserreward = (function () {
      /**
       * Namespace xuserreward.
       * @memberof bilibili.live
       * @namespace
       */
      const xuserreward = {};

      xuserreward.v1 = (function () {
        /**
         * Namespace v1.
         * @memberof bilibili.live.xuserreward
         * @namespace
         */
        const v1 = {};

        v1.InteractWord = (function () {
          /**
           * Properties of an InteractWord.
           * @memberof bilibili.live.xuserreward.v1
           * @interface IInteractWord
           * @property {number|null} [uid] InteractWord uid
           * @property {string|null} [uname] InteractWord uname
           * @property {string|null} [unameColor] InteractWord unameColor
           * @property {Array.<number>|null} [identities] InteractWord identities
           * @property {number|null} [msgType] InteractWord msgType
           * @property {number|null} [roomid] InteractWord roomid
           * @property {number|null} [timestamp] InteractWord timestamp
           * @property {number|null} [score] InteractWord score
           * @property {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo|null} [fansMedal] InteractWord fansMedal
           * @property {number|null} [isSpread] InteractWord isSpread
           * @property {string|null} [spreadInfo] InteractWord spreadInfo
           * @property {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo|null} [contribution] InteractWord contribution
           * @property {string|null} [spreadDesc] InteractWord spreadDesc
           * @property {number|null} [tailIcon] InteractWord tailIcon
           * @property {number|null} [triggerTime] InteractWord triggerTime
           * @property {number|null} [privilegeType] InteractWord privilegeType
           * @property {number|null} [coreUserType] InteractWord coreUserType
           * @property {string|null} [tailText] InteractWord tailText
           * @property {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2|null} [contributionV2] InteractWord contributionV2
           * @property {bilibili.live.component.common_model.fans_club.IGroupMedalBrief|null} [groupMedal] InteractWord groupMedal
           * @property {boolean|null} [isMystery] InteractWord isMystery
           * @property {bilibili.live.component.common_model.user_dagw.IUserInfo|null} [uinfo] InteractWord uinfo
           * @property {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation|null} [relationTail] InteractWord relationTail
           */

          /**
           * Constructs a new InteractWord.
           * @memberof bilibili.live.xuserreward.v1
           * @classdesc Represents an InteractWord.
           * @implements IInteractWord
           * @constructor
           * @param {bilibili.live.xuserreward.v1.IInteractWord=} [properties] Properties to set
           */
          function InteractWord(properties) {
            this.identities = [];
            if (properties)
              for (
                let keys = Object.keys(properties), i = 0;
                i < keys.length;
                ++i
              )
                if (properties[keys[i]] != null)
                  this[keys[i]] = properties[keys[i]];
          }

          /**
           * InteractWord uid.
           * @member {number} uid
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.uid = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord uname.
           * @member {string} uname
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.uname = "";

          /**
           * InteractWord unameColor.
           * @member {string} unameColor
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.unameColor = "";

          /**
           * InteractWord identities.
           * @member {Array.<number>} identities
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.identities = $util.emptyArray;

          /**
           * InteractWord msgType.
           * @member {number} msgType
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.msgType = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord roomid.
           * @member {number} roomid
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.roomid = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord timestamp.
           * @member {number} timestamp
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.timestamp = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord score.
           * @member {number} score
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.score = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord fansMedal.
           * @member {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo|null|undefined} fansMedal
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.fansMedal = null;

          /**
           * InteractWord isSpread.
           * @member {number} isSpread
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.isSpread = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord spreadInfo.
           * @member {string} spreadInfo
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.spreadInfo = "";

          /**
           * InteractWord contribution.
           * @member {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo|null|undefined} contribution
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.contribution = null;

          /**
           * InteractWord spreadDesc.
           * @member {string} spreadDesc
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.spreadDesc = "";

          /**
           * InteractWord tailIcon.
           * @member {number} tailIcon
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.tailIcon = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord triggerTime.
           * @member {number} triggerTime
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.triggerTime = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord privilegeType.
           * @member {number} privilegeType
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.privilegeType = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord coreUserType.
           * @member {number} coreUserType
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.coreUserType = $util.Long
            ? $util.Long.fromBits(0, 0, false)
            : 0;

          /**
           * InteractWord tailText.
           * @member {string} tailText
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.tailText = "";

          /**
           * InteractWord contributionV2.
           * @member {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2|null|undefined} contributionV2
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.contributionV2 = null;

          /**
           * InteractWord groupMedal.
           * @member {bilibili.live.component.common_model.fans_club.IGroupMedalBrief|null|undefined} groupMedal
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.groupMedal = null;

          /**
           * InteractWord isMystery.
           * @member {boolean} isMystery
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.isMystery = false;

          /**
           * InteractWord uinfo.
           * @member {bilibili.live.component.common_model.user_dagw.IUserInfo|null|undefined} uinfo
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.uinfo = null;

          /**
           * InteractWord relationTail.
           * @member {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation|null|undefined} relationTail
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           */
          InteractWord.prototype.relationTail = null;

          /**
           * Creates a new InteractWord instance using the specified properties.
           * @function create
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {bilibili.live.xuserreward.v1.IInteractWord=} [properties] Properties to set
           * @returns {bilibili.live.xuserreward.v1.InteractWord} InteractWord instance
           */
          InteractWord.create = function create(properties) {
            return new InteractWord(properties);
          };

          /**
           * Encodes the specified InteractWord message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.verify|verify} messages.
           * @function encode
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {bilibili.live.xuserreward.v1.IInteractWord} message InteractWord message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */
          InteractWord.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (
              message.uid != null &&
              Object.hasOwnProperty.call(message, "uid")
            )
              writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.uid);
            if (
              message.uname != null &&
              Object.hasOwnProperty.call(message, "uname")
            )
              writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.uname);
            if (
              message.unameColor != null &&
              Object.hasOwnProperty.call(message, "unameColor")
            )
              writer
                .uint32(/* id 3, wireType 2 =*/ 26)
                .string(message.unameColor);
            if (message.identities != null && message.identities.length) {
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork();
              for (let i = 0; i < message.identities.length; ++i)
                writer.int64(message.identities[i]);
              writer.ldelim();
            }
            if (
              message.msgType != null &&
              Object.hasOwnProperty.call(message, "msgType")
            )
              writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.msgType);
            if (
              message.roomid != null &&
              Object.hasOwnProperty.call(message, "roomid")
            )
              writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.roomid);
            if (
              message.timestamp != null &&
              Object.hasOwnProperty.call(message, "timestamp")
            )
              writer
                .uint32(/* id 7, wireType 0 =*/ 56)
                .int64(message.timestamp);
            if (
              message.score != null &&
              Object.hasOwnProperty.call(message, "score")
            )
              writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.score);
            if (
              message.fansMedal != null &&
              Object.hasOwnProperty.call(message, "fansMedal")
            )
              $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.encode(
                message.fansMedal,
                writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
              ).ldelim();
            if (
              message.isSpread != null &&
              Object.hasOwnProperty.call(message, "isSpread")
            )
              writer
                .uint32(/* id 10, wireType 0 =*/ 80)
                .int64(message.isSpread);
            if (
              message.spreadInfo != null &&
              Object.hasOwnProperty.call(message, "spreadInfo")
            )
              writer
                .uint32(/* id 11, wireType 2 =*/ 90)
                .string(message.spreadInfo);
            if (
              message.contribution != null &&
              Object.hasOwnProperty.call(message, "contribution")
            )
              $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.encode(
                message.contribution,
                writer.uint32(/* id 12, wireType 2 =*/ 98).fork()
              ).ldelim();
            if (
              message.spreadDesc != null &&
              Object.hasOwnProperty.call(message, "spreadDesc")
            )
              writer
                .uint32(/* id 13, wireType 2 =*/ 106)
                .string(message.spreadDesc);
            if (
              message.tailIcon != null &&
              Object.hasOwnProperty.call(message, "tailIcon")
            )
              writer
                .uint32(/* id 14, wireType 0 =*/ 112)
                .int64(message.tailIcon);
            if (
              message.triggerTime != null &&
              Object.hasOwnProperty.call(message, "triggerTime")
            )
              writer
                .uint32(/* id 15, wireType 0 =*/ 120)
                .int64(message.triggerTime);
            if (
              message.privilegeType != null &&
              Object.hasOwnProperty.call(message, "privilegeType")
            )
              writer
                .uint32(/* id 16, wireType 0 =*/ 128)
                .int64(message.privilegeType);
            if (
              message.coreUserType != null &&
              Object.hasOwnProperty.call(message, "coreUserType")
            )
              writer
                .uint32(/* id 17, wireType 0 =*/ 136)
                .int64(message.coreUserType);
            if (
              message.tailText != null &&
              Object.hasOwnProperty.call(message, "tailText")
            )
              writer
                .uint32(/* id 18, wireType 2 =*/ 146)
                .string(message.tailText);
            if (
              message.contributionV2 != null &&
              Object.hasOwnProperty.call(message, "contributionV2")
            )
              $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.encode(
                message.contributionV2,
                writer.uint32(/* id 19, wireType 2 =*/ 154).fork()
              ).ldelim();
            if (
              message.groupMedal != null &&
              Object.hasOwnProperty.call(message, "groupMedal")
            )
              $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief.encode(
                message.groupMedal,
                writer.uint32(/* id 20, wireType 2 =*/ 162).fork()
              ).ldelim();
            if (
              message.isMystery != null &&
              Object.hasOwnProperty.call(message, "isMystery")
            )
              writer
                .uint32(/* id 21, wireType 0 =*/ 168)
                .bool(message.isMystery);
            if (
              message.uinfo != null &&
              Object.hasOwnProperty.call(message, "uinfo")
            )
              $root.bilibili.live.component.common_model.user_dagw.UserInfo.encode(
                message.uinfo,
                writer.uint32(/* id 22, wireType 2 =*/ 178).fork()
              ).ldelim();
            if (
              message.relationTail != null &&
              Object.hasOwnProperty.call(message, "relationTail")
            )
              $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.encode(
                message.relationTail,
                writer.uint32(/* id 23, wireType 2 =*/ 186).fork()
              ).ldelim();
            return writer;
          };

          /**
           * Encodes the specified InteractWord message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.verify|verify} messages.
           * @function encodeDelimited
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {bilibili.live.xuserreward.v1.IInteractWord} message InteractWord message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */
          InteractWord.encodeDelimited = function encodeDelimited(
            message,
            writer
          ) {
            return this.encode(message, writer).ldelim();
          };

          /**
           * Decodes an InteractWord message from the specified reader or buffer.
           * @function decode
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {bilibili.live.xuserreward.v1.InteractWord} InteractWord
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          InteractWord.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
              message = new $root.bilibili.live.xuserreward.v1.InteractWord();
            while (reader.pos < end) {
              let tag = reader.uint32();
              if (tag === error) break;
              switch (tag >>> 3) {
                case 1: {
                  message.uid = reader.int64();
                  break;
                }
                case 2: {
                  message.uname = reader.string();
                  break;
                }
                case 3: {
                  message.unameColor = reader.string();
                  break;
                }
                case 4: {
                  if (!(message.identities && message.identities.length))
                    message.identities = [];
                  if ((tag & 7) === 2) {
                    let end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                      message.identities.push(reader.int64());
                  } else message.identities.push(reader.int64());
                  break;
                }
                case 5: {
                  message.msgType = reader.int64();
                  break;
                }
                case 6: {
                  message.roomid = reader.int64();
                  break;
                }
                case 7: {
                  message.timestamp = reader.int64();
                  break;
                }
                case 8: {
                  message.score = reader.int64();
                  break;
                }
                case 9: {
                  message.fansMedal =
                    $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                case 10: {
                  message.isSpread = reader.int64();
                  break;
                }
                case 11: {
                  message.spreadInfo = reader.string();
                  break;
                }
                case 12: {
                  message.contribution =
                    $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                case 13: {
                  message.spreadDesc = reader.string();
                  break;
                }
                case 14: {
                  message.tailIcon = reader.int64();
                  break;
                }
                case 15: {
                  message.triggerTime = reader.int64();
                  break;
                }
                case 16: {
                  message.privilegeType = reader.int64();
                  break;
                }
                case 17: {
                  message.coreUserType = reader.int64();
                  break;
                }
                case 18: {
                  message.tailText = reader.string();
                  break;
                }
                case 19: {
                  message.contributionV2 =
                    $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                case 20: {
                  message.groupMedal =
                    $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                case 21: {
                  message.isMystery = reader.bool();
                  break;
                }
                case 22: {
                  message.uinfo =
                    $root.bilibili.live.component.common_model.user_dagw.UserInfo.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                case 23: {
                  message.relationTail =
                    $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.decode(
                      reader,
                      reader.uint32()
                    );
                  break;
                }
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return message;
          };

          /**
           * Decodes an InteractWord message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {bilibili.live.xuserreward.v1.InteractWord} InteractWord
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          InteractWord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };

          /**
           * Verifies an InteractWord message.
           * @function verify
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */
          InteractWord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
              return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
              if (
                !$util.isInteger(message.uid) &&
                !(
                  message.uid &&
                  $util.isInteger(message.uid.low) &&
                  $util.isInteger(message.uid.high)
                )
              )
                return "uid: integer|Long expected";
            if (message.uname != null && message.hasOwnProperty("uname"))
              if (!$util.isString(message.uname))
                return "uname: string expected";
            if (
              message.unameColor != null &&
              message.hasOwnProperty("unameColor")
            )
              if (!$util.isString(message.unameColor))
                return "unameColor: string expected";
            if (
              message.identities != null &&
              message.hasOwnProperty("identities")
            ) {
              if (!Array.isArray(message.identities))
                return "identities: array expected";
              for (let i = 0; i < message.identities.length; ++i)
                if (
                  !$util.isInteger(message.identities[i]) &&
                  !(
                    message.identities[i] &&
                    $util.isInteger(message.identities[i].low) &&
                    $util.isInteger(message.identities[i].high)
                  )
                )
                  return "identities: integer|Long[] expected";
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
              if (
                !$util.isInteger(message.msgType) &&
                !(
                  message.msgType &&
                  $util.isInteger(message.msgType.low) &&
                  $util.isInteger(message.msgType.high)
                )
              )
                return "msgType: integer|Long expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
              if (
                !$util.isInteger(message.roomid) &&
                !(
                  message.roomid &&
                  $util.isInteger(message.roomid.low) &&
                  $util.isInteger(message.roomid.high)
                )
              )
                return "roomid: integer|Long expected";
            if (
              message.timestamp != null &&
              message.hasOwnProperty("timestamp")
            )
              if (
                !$util.isInteger(message.timestamp) &&
                !(
                  message.timestamp &&
                  $util.isInteger(message.timestamp.low) &&
                  $util.isInteger(message.timestamp.high)
                )
              )
                return "timestamp: integer|Long expected";
            if (message.score != null && message.hasOwnProperty("score"))
              if (
                !$util.isInteger(message.score) &&
                !(
                  message.score &&
                  $util.isInteger(message.score.low) &&
                  $util.isInteger(message.score.high)
                )
              )
                return "score: integer|Long expected";
            if (
              message.fansMedal != null &&
              message.hasOwnProperty("fansMedal")
            ) {
              let error =
                $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.verify(
                  message.fansMedal
                );
              if (error) return "fansMedal." + error;
            }
            if (message.isSpread != null && message.hasOwnProperty("isSpread"))
              if (
                !$util.isInteger(message.isSpread) &&
                !(
                  message.isSpread &&
                  $util.isInteger(message.isSpread.low) &&
                  $util.isInteger(message.isSpread.high)
                )
              )
                return "isSpread: integer|Long expected";
            if (
              message.spreadInfo != null &&
              message.hasOwnProperty("spreadInfo")
            )
              if (!$util.isString(message.spreadInfo))
                return "spreadInfo: string expected";
            if (
              message.contribution != null &&
              message.hasOwnProperty("contribution")
            ) {
              let error =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.verify(
                  message.contribution
                );
              if (error) return "contribution." + error;
            }
            if (
              message.spreadDesc != null &&
              message.hasOwnProperty("spreadDesc")
            )
              if (!$util.isString(message.spreadDesc))
                return "spreadDesc: string expected";
            if (message.tailIcon != null && message.hasOwnProperty("tailIcon"))
              if (
                !$util.isInteger(message.tailIcon) &&
                !(
                  message.tailIcon &&
                  $util.isInteger(message.tailIcon.low) &&
                  $util.isInteger(message.tailIcon.high)
                )
              )
                return "tailIcon: integer|Long expected";
            if (
              message.triggerTime != null &&
              message.hasOwnProperty("triggerTime")
            )
              if (
                !$util.isInteger(message.triggerTime) &&
                !(
                  message.triggerTime &&
                  $util.isInteger(message.triggerTime.low) &&
                  $util.isInteger(message.triggerTime.high)
                )
              )
                return "triggerTime: integer|Long expected";
            if (
              message.privilegeType != null &&
              message.hasOwnProperty("privilegeType")
            )
              if (
                !$util.isInteger(message.privilegeType) &&
                !(
                  message.privilegeType &&
                  $util.isInteger(message.privilegeType.low) &&
                  $util.isInteger(message.privilegeType.high)
                )
              )
                return "privilegeType: integer|Long expected";
            if (
              message.coreUserType != null &&
              message.hasOwnProperty("coreUserType")
            )
              if (
                !$util.isInteger(message.coreUserType) &&
                !(
                  message.coreUserType &&
                  $util.isInteger(message.coreUserType.low) &&
                  $util.isInteger(message.coreUserType.high)
                )
              )
                return "coreUserType: integer|Long expected";
            if (message.tailText != null && message.hasOwnProperty("tailText"))
              if (!$util.isString(message.tailText))
                return "tailText: string expected";
            if (
              message.contributionV2 != null &&
              message.hasOwnProperty("contributionV2")
            ) {
              let error =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.verify(
                  message.contributionV2
                );
              if (error) return "contributionV2." + error;
            }
            if (
              message.groupMedal != null &&
              message.hasOwnProperty("groupMedal")
            ) {
              let error =
                $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief.verify(
                  message.groupMedal
                );
              if (error) return "groupMedal." + error;
            }
            if (
              message.isMystery != null &&
              message.hasOwnProperty("isMystery")
            )
              if (typeof message.isMystery !== "boolean")
                return "isMystery: boolean expected";
            if (message.uinfo != null && message.hasOwnProperty("uinfo")) {
              let error =
                $root.bilibili.live.component.common_model.user_dagw.UserInfo.verify(
                  message.uinfo
                );
              if (error) return "uinfo." + error;
            }
            if (
              message.relationTail != null &&
              message.hasOwnProperty("relationTail")
            ) {
              let error =
                $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.verify(
                  message.relationTail
                );
              if (error) return "relationTail." + error;
            }
            return null;
          };

          /**
           * Creates an InteractWord message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {bilibili.live.xuserreward.v1.InteractWord} InteractWord
           */
          InteractWord.fromObject = function fromObject(object) {
            if (
              object instanceof $root.bilibili.live.xuserreward.v1.InteractWord
            )
              return object;
            let message = new $root.bilibili.live.xuserreward.v1.InteractWord();
            if (object.uid != null)
              if ($util.Long)
                (message.uid = $util.Long.fromValue(
                  object.uid
                )).unsigned = false;
              else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
              else if (typeof object.uid === "number") message.uid = object.uid;
              else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(
                  object.uid.low >>> 0,
                  object.uid.high >>> 0
                ).toNumber();
            if (object.uname != null) message.uname = String(object.uname);
            if (object.unameColor != null)
              message.unameColor = String(object.unameColor);
            if (object.identities) {
              if (!Array.isArray(object.identities))
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.identities: array expected"
                );
              message.identities = [];
              for (let i = 0; i < object.identities.length; ++i)
                if ($util.Long)
                  (message.identities[i] = $util.Long.fromValue(
                    object.identities[i]
                  )).unsigned = false;
                else if (typeof object.identities[i] === "string")
                  message.identities[i] = parseInt(object.identities[i], 10);
                else if (typeof object.identities[i] === "number")
                  message.identities[i] = object.identities[i];
                else if (typeof object.identities[i] === "object")
                  message.identities[i] = new $util.LongBits(
                    object.identities[i].low >>> 0,
                    object.identities[i].high >>> 0
                  ).toNumber();
            }
            if (object.msgType != null)
              if ($util.Long)
                (message.msgType = $util.Long.fromValue(
                  object.msgType
                )).unsigned = false;
              else if (typeof object.msgType === "string")
                message.msgType = parseInt(object.msgType, 10);
              else if (typeof object.msgType === "number")
                message.msgType = object.msgType;
              else if (typeof object.msgType === "object")
                message.msgType = new $util.LongBits(
                  object.msgType.low >>> 0,
                  object.msgType.high >>> 0
                ).toNumber();
            if (object.roomid != null)
              if ($util.Long)
                (message.roomid = $util.Long.fromValue(
                  object.roomid
                )).unsigned = false;
              else if (typeof object.roomid === "string")
                message.roomid = parseInt(object.roomid, 10);
              else if (typeof object.roomid === "number")
                message.roomid = object.roomid;
              else if (typeof object.roomid === "object")
                message.roomid = new $util.LongBits(
                  object.roomid.low >>> 0,
                  object.roomid.high >>> 0
                ).toNumber();
            if (object.timestamp != null)
              if ($util.Long)
                (message.timestamp = $util.Long.fromValue(
                  object.timestamp
                )).unsigned = false;
              else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
              else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
              else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(
                  object.timestamp.low >>> 0,
                  object.timestamp.high >>> 0
                ).toNumber();
            if (object.score != null)
              if ($util.Long)
                (message.score = $util.Long.fromValue(
                  object.score
                )).unsigned = false;
              else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
              else if (typeof object.score === "number")
                message.score = object.score;
              else if (typeof object.score === "object")
                message.score = new $util.LongBits(
                  object.score.low >>> 0,
                  object.score.high >>> 0
                ).toNumber();
            if (object.fansMedal != null) {
              if (typeof object.fansMedal !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.fansMedal: object expected"
                );
              message.fansMedal =
                $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.fromObject(
                  object.fansMedal
                );
            }
            if (object.isSpread != null)
              if ($util.Long)
                (message.isSpread = $util.Long.fromValue(
                  object.isSpread
                )).unsigned = false;
              else if (typeof object.isSpread === "string")
                message.isSpread = parseInt(object.isSpread, 10);
              else if (typeof object.isSpread === "number")
                message.isSpread = object.isSpread;
              else if (typeof object.isSpread === "object")
                message.isSpread = new $util.LongBits(
                  object.isSpread.low >>> 0,
                  object.isSpread.high >>> 0
                ).toNumber();
            if (object.spreadInfo != null)
              message.spreadInfo = String(object.spreadInfo);
            if (object.contribution != null) {
              if (typeof object.contribution !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.contribution: object expected"
                );
              message.contribution =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.fromObject(
                  object.contribution
                );
            }
            if (object.spreadDesc != null)
              message.spreadDesc = String(object.spreadDesc);
            if (object.tailIcon != null)
              if ($util.Long)
                (message.tailIcon = $util.Long.fromValue(
                  object.tailIcon
                )).unsigned = false;
              else if (typeof object.tailIcon === "string")
                message.tailIcon = parseInt(object.tailIcon, 10);
              else if (typeof object.tailIcon === "number")
                message.tailIcon = object.tailIcon;
              else if (typeof object.tailIcon === "object")
                message.tailIcon = new $util.LongBits(
                  object.tailIcon.low >>> 0,
                  object.tailIcon.high >>> 0
                ).toNumber();
            if (object.triggerTime != null)
              if ($util.Long)
                (message.triggerTime = $util.Long.fromValue(
                  object.triggerTime
                )).unsigned = false;
              else if (typeof object.triggerTime === "string")
                message.triggerTime = parseInt(object.triggerTime, 10);
              else if (typeof object.triggerTime === "number")
                message.triggerTime = object.triggerTime;
              else if (typeof object.triggerTime === "object")
                message.triggerTime = new $util.LongBits(
                  object.triggerTime.low >>> 0,
                  object.triggerTime.high >>> 0
                ).toNumber();
            if (object.privilegeType != null)
              if ($util.Long)
                (message.privilegeType = $util.Long.fromValue(
                  object.privilegeType
                )).unsigned = false;
              else if (typeof object.privilegeType === "string")
                message.privilegeType = parseInt(object.privilegeType, 10);
              else if (typeof object.privilegeType === "number")
                message.privilegeType = object.privilegeType;
              else if (typeof object.privilegeType === "object")
                message.privilegeType = new $util.LongBits(
                  object.privilegeType.low >>> 0,
                  object.privilegeType.high >>> 0
                ).toNumber();
            if (object.coreUserType != null)
              if ($util.Long)
                (message.coreUserType = $util.Long.fromValue(
                  object.coreUserType
                )).unsigned = false;
              else if (typeof object.coreUserType === "string")
                message.coreUserType = parseInt(object.coreUserType, 10);
              else if (typeof object.coreUserType === "number")
                message.coreUserType = object.coreUserType;
              else if (typeof object.coreUserType === "object")
                message.coreUserType = new $util.LongBits(
                  object.coreUserType.low >>> 0,
                  object.coreUserType.high >>> 0
                ).toNumber();
            if (object.tailText != null)
              message.tailText = String(object.tailText);
            if (object.contributionV2 != null) {
              if (typeof object.contributionV2 !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.contributionV2: object expected"
                );
              message.contributionV2 =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.fromObject(
                  object.contributionV2
                );
            }
            if (object.groupMedal != null) {
              if (typeof object.groupMedal !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.groupMedal: object expected"
                );
              message.groupMedal =
                $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief.fromObject(
                  object.groupMedal
                );
            }
            if (object.isMystery != null)
              message.isMystery = Boolean(object.isMystery);
            if (object.uinfo != null) {
              if (typeof object.uinfo !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.uinfo: object expected"
                );
              message.uinfo =
                $root.bilibili.live.component.common_model.user_dagw.UserInfo.fromObject(
                  object.uinfo
                );
            }
            if (object.relationTail != null) {
              if (typeof object.relationTail !== "object")
                throw TypeError(
                  ".bilibili.live.xuserreward.v1.InteractWord.relationTail: object expected"
                );
              message.relationTail =
                $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.fromObject(
                  object.relationTail
                );
            }
            return message;
          };

          /**
           * Creates a plain object from an InteractWord message. Also converts values to other types if specified.
           * @function toObject
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {bilibili.live.xuserreward.v1.InteractWord} message InteractWord
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */
          InteractWord.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.identities = [];
            if (options.defaults) {
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.uid =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.uid = options.longs === String ? "0" : 0;
              object.uname = "";
              object.unameColor = "";
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.msgType =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.msgType = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.roomid =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.roomid = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.timestamp =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.timestamp = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.score =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.score = options.longs === String ? "0" : 0;
              object.fansMedal = null;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.isSpread =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.isSpread = options.longs === String ? "0" : 0;
              object.spreadInfo = "";
              object.contribution = null;
              object.spreadDesc = "";
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.tailIcon =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.tailIcon = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.triggerTime =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.triggerTime = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.privilegeType =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.privilegeType = options.longs === String ? "0" : 0;
              if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.coreUserType =
                  options.longs === String
                    ? long.toString()
                    : options.longs === Number
                    ? long.toNumber()
                    : long;
              } else object.coreUserType = options.longs === String ? "0" : 0;
              object.tailText = "";
              object.contributionV2 = null;
              object.groupMedal = null;
              object.isMystery = false;
              object.uinfo = null;
              object.relationTail = null;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
              if (typeof message.uid === "number")
                object.uid =
                  options.longs === String ? String(message.uid) : message.uid;
              else
                object.uid =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.uid)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.uid.low >>> 0,
                        message.uid.high >>> 0
                      ).toNumber()
                    : message.uid;
            if (message.uname != null && message.hasOwnProperty("uname"))
              object.uname = message.uname;
            if (
              message.unameColor != null &&
              message.hasOwnProperty("unameColor")
            )
              object.unameColor = message.unameColor;
            if (message.identities && message.identities.length) {
              object.identities = [];
              for (let j = 0; j < message.identities.length; ++j)
                if (typeof message.identities[j] === "number")
                  object.identities[j] =
                    options.longs === String
                      ? String(message.identities[j])
                      : message.identities[j];
                else
                  object.identities[j] =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(
                          message.identities[j]
                        )
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.identities[j].low >>> 0,
                          message.identities[j].high >>> 0
                        ).toNumber()
                      : message.identities[j];
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
              if (typeof message.msgType === "number")
                object.msgType =
                  options.longs === String
                    ? String(message.msgType)
                    : message.msgType;
              else
                object.msgType =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.msgType)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.msgType.low >>> 0,
                        message.msgType.high >>> 0
                      ).toNumber()
                    : message.msgType;
            if (message.roomid != null && message.hasOwnProperty("roomid"))
              if (typeof message.roomid === "number")
                object.roomid =
                  options.longs === String
                    ? String(message.roomid)
                    : message.roomid;
              else
                object.roomid =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.roomid)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.roomid.low >>> 0,
                        message.roomid.high >>> 0
                      ).toNumber()
                    : message.roomid;
            if (
              message.timestamp != null &&
              message.hasOwnProperty("timestamp")
            )
              if (typeof message.timestamp === "number")
                object.timestamp =
                  options.longs === String
                    ? String(message.timestamp)
                    : message.timestamp;
              else
                object.timestamp =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.timestamp)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.timestamp.low >>> 0,
                        message.timestamp.high >>> 0
                      ).toNumber()
                    : message.timestamp;
            if (message.score != null && message.hasOwnProperty("score"))
              if (typeof message.score === "number")
                object.score =
                  options.longs === String
                    ? String(message.score)
                    : message.score;
              else
                object.score =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.score)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.score.low >>> 0,
                        message.score.high >>> 0
                      ).toNumber()
                    : message.score;
            if (
              message.fansMedal != null &&
              message.hasOwnProperty("fansMedal")
            )
              object.fansMedal =
                $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.toObject(
                  message.fansMedal,
                  options
                );
            if (message.isSpread != null && message.hasOwnProperty("isSpread"))
              if (typeof message.isSpread === "number")
                object.isSpread =
                  options.longs === String
                    ? String(message.isSpread)
                    : message.isSpread;
              else
                object.isSpread =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.isSpread)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.isSpread.low >>> 0,
                        message.isSpread.high >>> 0
                      ).toNumber()
                    : message.isSpread;
            if (
              message.spreadInfo != null &&
              message.hasOwnProperty("spreadInfo")
            )
              object.spreadInfo = message.spreadInfo;
            if (
              message.contribution != null &&
              message.hasOwnProperty("contribution")
            )
              object.contribution =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.toObject(
                  message.contribution,
                  options
                );
            if (
              message.spreadDesc != null &&
              message.hasOwnProperty("spreadDesc")
            )
              object.spreadDesc = message.spreadDesc;
            if (message.tailIcon != null && message.hasOwnProperty("tailIcon"))
              if (typeof message.tailIcon === "number")
                object.tailIcon =
                  options.longs === String
                    ? String(message.tailIcon)
                    : message.tailIcon;
              else
                object.tailIcon =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.tailIcon)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.tailIcon.low >>> 0,
                        message.tailIcon.high >>> 0
                      ).toNumber()
                    : message.tailIcon;
            if (
              message.triggerTime != null &&
              message.hasOwnProperty("triggerTime")
            )
              if (typeof message.triggerTime === "number")
                object.triggerTime =
                  options.longs === String
                    ? String(message.triggerTime)
                    : message.triggerTime;
              else
                object.triggerTime =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.triggerTime)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.triggerTime.low >>> 0,
                        message.triggerTime.high >>> 0
                      ).toNumber()
                    : message.triggerTime;
            if (
              message.privilegeType != null &&
              message.hasOwnProperty("privilegeType")
            )
              if (typeof message.privilegeType === "number")
                object.privilegeType =
                  options.longs === String
                    ? String(message.privilegeType)
                    : message.privilegeType;
              else
                object.privilegeType =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.privilegeType)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.privilegeType.low >>> 0,
                        message.privilegeType.high >>> 0
                      ).toNumber()
                    : message.privilegeType;
            if (
              message.coreUserType != null &&
              message.hasOwnProperty("coreUserType")
            )
              if (typeof message.coreUserType === "number")
                object.coreUserType =
                  options.longs === String
                    ? String(message.coreUserType)
                    : message.coreUserType;
              else
                object.coreUserType =
                  options.longs === String
                    ? $util.Long.prototype.toString.call(message.coreUserType)
                    : options.longs === Number
                    ? new $util.LongBits(
                        message.coreUserType.low >>> 0,
                        message.coreUserType.high >>> 0
                      ).toNumber()
                    : message.coreUserType;
            if (message.tailText != null && message.hasOwnProperty("tailText"))
              object.tailText = message.tailText;
            if (
              message.contributionV2 != null &&
              message.hasOwnProperty("contributionV2")
            )
              object.contributionV2 =
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.toObject(
                  message.contributionV2,
                  options
                );
            if (
              message.groupMedal != null &&
              message.hasOwnProperty("groupMedal")
            )
              object.groupMedal =
                $root.bilibili.live.component.common_model.fans_club.GroupMedalBrief.toObject(
                  message.groupMedal,
                  options
                );
            if (
              message.isMystery != null &&
              message.hasOwnProperty("isMystery")
            )
              object.isMystery = message.isMystery;
            if (message.uinfo != null && message.hasOwnProperty("uinfo"))
              object.uinfo =
                $root.bilibili.live.component.common_model.user_dagw.UserInfo.toObject(
                  message.uinfo,
                  options
                );
            if (
              message.relationTail != null &&
              message.hasOwnProperty("relationTail")
            )
              object.relationTail =
                $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.toObject(
                  message.relationTail,
                  options
                );
            return object;
          };

          /**
           * Converts this InteractWord to JSON.
           * @function toJSON
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @instance
           * @returns {Object.<string,*>} JSON object
           */
          InteractWord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(
              this,
              $protobuf.util.toJSONOptions
            );
          };

          /**
           * Gets the default type url for InteractWord
           * @function getTypeUrl
           * @memberof bilibili.live.xuserreward.v1.InteractWord
           * @static
           * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
           * @returns {string} The default type url
           */
          InteractWord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
              typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.live.xuserreward.v1.InteractWord";
          };

          InteractWord.ContributionInfo = (function () {
            /**
             * Properties of a ContributionInfo.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @interface IContributionInfo
             * @property {number|null} [grade] ContributionInfo grade
             */

            /**
             * Constructs a new ContributionInfo.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @classdesc Represents a ContributionInfo.
             * @implements IContributionInfo
             * @constructor
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo=} [properties] Properties to set
             */
            function ContributionInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * ContributionInfo grade.
             * @member {number} grade
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @instance
             */
            ContributionInfo.prototype.grade = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new ContributionInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo=} [properties] Properties to set
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfo} ContributionInfo instance
             */
            ContributionInfo.create = function create(properties) {
              return new ContributionInfo(properties);
            };

            /**
             * Encodes the specified ContributionInfo message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo} message ContributionInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContributionInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.grade != null &&
                Object.hasOwnProperty.call(message, "grade")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.grade);
              return writer;
            };

            /**
             * Encodes the specified ContributionInfo message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfo} message ContributionInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContributionInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ContributionInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfo} ContributionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContributionInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.grade = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a ContributionInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfo} ContributionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContributionInfo.decodeDelimited = function decodeDelimited(
              reader
            ) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ContributionInfo message.
             * @function verify
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContributionInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.grade != null && message.hasOwnProperty("grade"))
                if (
                  !$util.isInteger(message.grade) &&
                  !(
                    message.grade &&
                    $util.isInteger(message.grade.low) &&
                    $util.isInteger(message.grade.high)
                  )
                )
                  return "grade: integer|Long expected";
              return null;
            };

            /**
             * Creates a ContributionInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfo} ContributionInfo
             */
            ContributionInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
              )
                return object;
              let message =
                new $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfo();
              if (object.grade != null)
                if ($util.Long)
                  (message.grade = $util.Long.fromValue(
                    object.grade
                  )).unsigned = false;
                else if (typeof object.grade === "string")
                  message.grade = parseInt(object.grade, 10);
                else if (typeof object.grade === "number")
                  message.grade = object.grade;
                else if (typeof object.grade === "object")
                  message.grade = new $util.LongBits(
                    object.grade.low >>> 0,
                    object.grade.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a ContributionInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.ContributionInfo} message ContributionInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContributionInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults)
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.grade =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.grade = options.longs === String ? "0" : 0;
              if (message.grade != null && message.hasOwnProperty("grade"))
                if (typeof message.grade === "number")
                  object.grade =
                    options.longs === String
                      ? String(message.grade)
                      : message.grade;
                else
                  object.grade =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.grade)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.grade.low >>> 0,
                          message.grade.high >>> 0
                        ).toNumber()
                      : message.grade;
              return object;
            };

            /**
             * Converts this ContributionInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContributionInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for ContributionInfo
             * @function getTypeUrl
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ContributionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.xuserreward.v1.InteractWord.ContributionInfo"
              );
            };

            return ContributionInfo;
          })();

          InteractWord.ContributionInfoV2 = (function () {
            /**
             * Properties of a ContributionInfoV2.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @interface IContributionInfoV2
             * @property {number|null} [grade] ContributionInfoV2 grade
             * @property {string|null} [rankType] ContributionInfoV2 rankType
             * @property {string|null} [text] ContributionInfoV2 text
             */

            /**
             * Constructs a new ContributionInfoV2.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @classdesc Represents a ContributionInfoV2.
             * @implements IContributionInfoV2
             * @constructor
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2=} [properties] Properties to set
             */
            function ContributionInfoV2(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * ContributionInfoV2 grade.
             * @member {number} grade
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @instance
             */
            ContributionInfoV2.prototype.grade = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * ContributionInfoV2 rankType.
             * @member {string} rankType
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @instance
             */
            ContributionInfoV2.prototype.rankType = "";

            /**
             * ContributionInfoV2 text.
             * @member {string} text
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @instance
             */
            ContributionInfoV2.prototype.text = "";

            /**
             * Creates a new ContributionInfoV2 instance using the specified properties.
             * @function create
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2=} [properties] Properties to set
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2} ContributionInfoV2 instance
             */
            ContributionInfoV2.create = function create(properties) {
              return new ContributionInfoV2(properties);
            };

            /**
             * Encodes the specified ContributionInfoV2 message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2} message ContributionInfoV2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContributionInfoV2.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.grade != null &&
                Object.hasOwnProperty.call(message, "grade")
              )
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.grade);
              if (
                message.rankType != null &&
                Object.hasOwnProperty.call(message, "rankType")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.rankType);
              if (
                message.text != null &&
                Object.hasOwnProperty.call(message, "text")
              )
                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.text);
              return writer;
            };

            /**
             * Encodes the specified ContributionInfoV2 message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2} message ContributionInfoV2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContributionInfoV2.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ContributionInfoV2 message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2} ContributionInfoV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContributionInfoV2.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.grade = reader.int64();
                    break;
                  }
                  case 2: {
                    message.rankType = reader.string();
                    break;
                  }
                  case 3: {
                    message.text = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a ContributionInfoV2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2} ContributionInfoV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContributionInfoV2.decodeDelimited = function decodeDelimited(
              reader
            ) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ContributionInfoV2 message.
             * @function verify
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContributionInfoV2.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.grade != null && message.hasOwnProperty("grade"))
                if (
                  !$util.isInteger(message.grade) &&
                  !(
                    message.grade &&
                    $util.isInteger(message.grade.low) &&
                    $util.isInteger(message.grade.high)
                  )
                )
                  return "grade: integer|Long expected";
              if (
                message.rankType != null &&
                message.hasOwnProperty("rankType")
              )
                if (!$util.isString(message.rankType))
                  return "rankType: string expected";
              if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                  return "text: string expected";
              return null;
            };

            /**
             * Creates a ContributionInfoV2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2} ContributionInfoV2
             */
            ContributionInfoV2.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.xuserreward.v1.InteractWord
                  .ContributionInfoV2
              )
                return object;
              let message =
                new $root.bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2();
              if (object.grade != null)
                if ($util.Long)
                  (message.grade = $util.Long.fromValue(
                    object.grade
                  )).unsigned = false;
                else if (typeof object.grade === "string")
                  message.grade = parseInt(object.grade, 10);
                else if (typeof object.grade === "number")
                  message.grade = object.grade;
                else if (typeof object.grade === "object")
                  message.grade = new $util.LongBits(
                    object.grade.low >>> 0,
                    object.grade.high >>> 0
                  ).toNumber();
              if (object.rankType != null)
                message.rankType = String(object.rankType);
              if (object.text != null) message.text = String(object.text);
              return message;
            };

            /**
             * Creates a plain object from a ContributionInfoV2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2} message ContributionInfoV2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContributionInfoV2.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.grade =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.grade = options.longs === String ? "0" : 0;
                object.rankType = "";
                object.text = "";
              }
              if (message.grade != null && message.hasOwnProperty("grade"))
                if (typeof message.grade === "number")
                  object.grade =
                    options.longs === String
                      ? String(message.grade)
                      : message.grade;
                else
                  object.grade =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.grade)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.grade.low >>> 0,
                          message.grade.high >>> 0
                        ).toNumber()
                      : message.grade;
              if (
                message.rankType != null &&
                message.hasOwnProperty("rankType")
              )
                object.rankType = message.rankType;
              if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
              return object;
            };

            /**
             * Converts this ContributionInfoV2 to JSON.
             * @function toJSON
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContributionInfoV2.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for ContributionInfoV2
             * @function getTypeUrl
             * @memberof bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ContributionInfoV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2"
              );
            };

            return ContributionInfoV2;
          })();

          InteractWord.FansMedalInfo = (function () {
            /**
             * Properties of a FansMedalInfo.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @interface IFansMedalInfo
             * @property {number|null} [targetId] FansMedalInfo targetId
             * @property {number|null} [medalLevel] FansMedalInfo medalLevel
             * @property {string|null} [medalName] FansMedalInfo medalName
             * @property {number|null} [medalColor] FansMedalInfo medalColor
             * @property {number|null} [medalColorStart] FansMedalInfo medalColorStart
             * @property {number|null} [medalColorEnd] FansMedalInfo medalColorEnd
             * @property {number|null} [medalColorBorder] FansMedalInfo medalColorBorder
             * @property {number|null} [isLighted] FansMedalInfo isLighted
             * @property {number|null} [guardLevel] FansMedalInfo guardLevel
             * @property {string|null} [special] FansMedalInfo special
             * @property {number|null} [iconId] FansMedalInfo iconId
             * @property {number|null} [anchorRoomid] FansMedalInfo anchorRoomid
             * @property {number|null} [score] FansMedalInfo score
             */

            /**
             * Constructs a new FansMedalInfo.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @classdesc Represents a FansMedalInfo.
             * @implements IFansMedalInfo
             * @constructor
             * @param {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo=} [properties] Properties to set
             */
            function FansMedalInfo(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * FansMedalInfo targetId.
             * @member {number} targetId
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.targetId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo medalLevel.
             * @member {number} medalLevel
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalLevel = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo medalName.
             * @member {string} medalName
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalName = "";

            /**
             * FansMedalInfo medalColor.
             * @member {number} medalColor
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalColor = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo medalColorStart.
             * @member {number} medalColorStart
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalColorStart = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo medalColorEnd.
             * @member {number} medalColorEnd
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalColorEnd = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo medalColorBorder.
             * @member {number} medalColorBorder
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.medalColorBorder = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo isLighted.
             * @member {number} isLighted
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.isLighted = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo guardLevel.
             * @member {number} guardLevel
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.guardLevel = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo special.
             * @member {string} special
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.special = "";

            /**
             * FansMedalInfo iconId.
             * @member {number} iconId
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.iconId = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo anchorRoomid.
             * @member {number} anchorRoomid
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.anchorRoomid = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * FansMedalInfo score.
             * @member {number} score
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             */
            FansMedalInfo.prototype.score = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new FansMedalInfo instance using the specified properties.
             * @function create
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo=} [properties] Properties to set
             * @returns {bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo} FansMedalInfo instance
             */
            FansMedalInfo.create = function create(properties) {
              return new FansMedalInfo(properties);
            };

            /**
             * Encodes the specified FansMedalInfo message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo} message FansMedalInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FansMedalInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.targetId != null &&
                Object.hasOwnProperty.call(message, "targetId")
              )
                writer
                  .uint32(/* id 1, wireType 0 =*/ 8)
                  .int64(message.targetId);
              if (
                message.medalLevel != null &&
                Object.hasOwnProperty.call(message, "medalLevel")
              )
                writer
                  .uint32(/* id 2, wireType 0 =*/ 16)
                  .int64(message.medalLevel);
              if (
                message.medalName != null &&
                Object.hasOwnProperty.call(message, "medalName")
              )
                writer
                  .uint32(/* id 3, wireType 2 =*/ 26)
                  .string(message.medalName);
              if (
                message.medalColor != null &&
                Object.hasOwnProperty.call(message, "medalColor")
              )
                writer
                  .uint32(/* id 4, wireType 0 =*/ 32)
                  .int64(message.medalColor);
              if (
                message.medalColorStart != null &&
                Object.hasOwnProperty.call(message, "medalColorStart")
              )
                writer
                  .uint32(/* id 5, wireType 0 =*/ 40)
                  .int64(message.medalColorStart);
              if (
                message.medalColorEnd != null &&
                Object.hasOwnProperty.call(message, "medalColorEnd")
              )
                writer
                  .uint32(/* id 6, wireType 0 =*/ 48)
                  .int64(message.medalColorEnd);
              if (
                message.medalColorBorder != null &&
                Object.hasOwnProperty.call(message, "medalColorBorder")
              )
                writer
                  .uint32(/* id 7, wireType 0 =*/ 56)
                  .int64(message.medalColorBorder);
              if (
                message.isLighted != null &&
                Object.hasOwnProperty.call(message, "isLighted")
              )
                writer
                  .uint32(/* id 8, wireType 0 =*/ 64)
                  .int64(message.isLighted);
              if (
                message.guardLevel != null &&
                Object.hasOwnProperty.call(message, "guardLevel")
              )
                writer
                  .uint32(/* id 9, wireType 0 =*/ 72)
                  .int64(message.guardLevel);
              if (
                message.special != null &&
                Object.hasOwnProperty.call(message, "special")
              )
                writer
                  .uint32(/* id 10, wireType 2 =*/ 82)
                  .string(message.special);
              if (
                message.iconId != null &&
                Object.hasOwnProperty.call(message, "iconId")
              )
                writer
                  .uint32(/* id 11, wireType 0 =*/ 88)
                  .int64(message.iconId);
              if (
                message.anchorRoomid != null &&
                Object.hasOwnProperty.call(message, "anchorRoomid")
              )
                writer
                  .uint32(/* id 12, wireType 0 =*/ 96)
                  .int64(message.anchorRoomid);
              if (
                message.score != null &&
                Object.hasOwnProperty.call(message, "score")
              )
                writer
                  .uint32(/* id 13, wireType 0 =*/ 104)
                  .int64(message.score);
              return writer;
            };

            /**
             * Encodes the specified FansMedalInfo message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo} message FansMedalInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FansMedalInfo.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FansMedalInfo message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo} FansMedalInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FansMedalInfo.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.targetId = reader.int64();
                    break;
                  }
                  case 2: {
                    message.medalLevel = reader.int64();
                    break;
                  }
                  case 3: {
                    message.medalName = reader.string();
                    break;
                  }
                  case 4: {
                    message.medalColor = reader.int64();
                    break;
                  }
                  case 5: {
                    message.medalColorStart = reader.int64();
                    break;
                  }
                  case 6: {
                    message.medalColorEnd = reader.int64();
                    break;
                  }
                  case 7: {
                    message.medalColorBorder = reader.int64();
                    break;
                  }
                  case 8: {
                    message.isLighted = reader.int64();
                    break;
                  }
                  case 9: {
                    message.guardLevel = reader.int64();
                    break;
                  }
                  case 10: {
                    message.special = reader.string();
                    break;
                  }
                  case 11: {
                    message.iconId = reader.int64();
                    break;
                  }
                  case 12: {
                    message.anchorRoomid = reader.int64();
                    break;
                  }
                  case 13: {
                    message.score = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a FansMedalInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo} FansMedalInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FansMedalInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FansMedalInfo message.
             * @function verify
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FansMedalInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (
                message.targetId != null &&
                message.hasOwnProperty("targetId")
              )
                if (
                  !$util.isInteger(message.targetId) &&
                  !(
                    message.targetId &&
                    $util.isInteger(message.targetId.low) &&
                    $util.isInteger(message.targetId.high)
                  )
                )
                  return "targetId: integer|Long expected";
              if (
                message.medalLevel != null &&
                message.hasOwnProperty("medalLevel")
              )
                if (
                  !$util.isInteger(message.medalLevel) &&
                  !(
                    message.medalLevel &&
                    $util.isInteger(message.medalLevel.low) &&
                    $util.isInteger(message.medalLevel.high)
                  )
                )
                  return "medalLevel: integer|Long expected";
              if (
                message.medalName != null &&
                message.hasOwnProperty("medalName")
              )
                if (!$util.isString(message.medalName))
                  return "medalName: string expected";
              if (
                message.medalColor != null &&
                message.hasOwnProperty("medalColor")
              )
                if (
                  !$util.isInteger(message.medalColor) &&
                  !(
                    message.medalColor &&
                    $util.isInteger(message.medalColor.low) &&
                    $util.isInteger(message.medalColor.high)
                  )
                )
                  return "medalColor: integer|Long expected";
              if (
                message.medalColorStart != null &&
                message.hasOwnProperty("medalColorStart")
              )
                if (
                  !$util.isInteger(message.medalColorStart) &&
                  !(
                    message.medalColorStart &&
                    $util.isInteger(message.medalColorStart.low) &&
                    $util.isInteger(message.medalColorStart.high)
                  )
                )
                  return "medalColorStart: integer|Long expected";
              if (
                message.medalColorEnd != null &&
                message.hasOwnProperty("medalColorEnd")
              )
                if (
                  !$util.isInteger(message.medalColorEnd) &&
                  !(
                    message.medalColorEnd &&
                    $util.isInteger(message.medalColorEnd.low) &&
                    $util.isInteger(message.medalColorEnd.high)
                  )
                )
                  return "medalColorEnd: integer|Long expected";
              if (
                message.medalColorBorder != null &&
                message.hasOwnProperty("medalColorBorder")
              )
                if (
                  !$util.isInteger(message.medalColorBorder) &&
                  !(
                    message.medalColorBorder &&
                    $util.isInteger(message.medalColorBorder.low) &&
                    $util.isInteger(message.medalColorBorder.high)
                  )
                )
                  return "medalColorBorder: integer|Long expected";
              if (
                message.isLighted != null &&
                message.hasOwnProperty("isLighted")
              )
                if (
                  !$util.isInteger(message.isLighted) &&
                  !(
                    message.isLighted &&
                    $util.isInteger(message.isLighted.low) &&
                    $util.isInteger(message.isLighted.high)
                  )
                )
                  return "isLighted: integer|Long expected";
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (
                  !$util.isInteger(message.guardLevel) &&
                  !(
                    message.guardLevel &&
                    $util.isInteger(message.guardLevel.low) &&
                    $util.isInteger(message.guardLevel.high)
                  )
                )
                  return "guardLevel: integer|Long expected";
              if (message.special != null && message.hasOwnProperty("special"))
                if (!$util.isString(message.special))
                  return "special: string expected";
              if (message.iconId != null && message.hasOwnProperty("iconId"))
                if (
                  !$util.isInteger(message.iconId) &&
                  !(
                    message.iconId &&
                    $util.isInteger(message.iconId.low) &&
                    $util.isInteger(message.iconId.high)
                  )
                )
                  return "iconId: integer|Long expected";
              if (
                message.anchorRoomid != null &&
                message.hasOwnProperty("anchorRoomid")
              )
                if (
                  !$util.isInteger(message.anchorRoomid) &&
                  !(
                    message.anchorRoomid &&
                    $util.isInteger(message.anchorRoomid.low) &&
                    $util.isInteger(message.anchorRoomid.high)
                  )
                )
                  return "anchorRoomid: integer|Long expected";
              if (message.score != null && message.hasOwnProperty("score"))
                if (
                  !$util.isInteger(message.score) &&
                  !(
                    message.score &&
                    $util.isInteger(message.score.low) &&
                    $util.isInteger(message.score.high)
                  )
                )
                  return "score: integer|Long expected";
              return null;
            };

            /**
             * Creates a FansMedalInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo} FansMedalInfo
             */
            FansMedalInfo.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
              )
                return object;
              let message =
                new $root.bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo();
              if (object.targetId != null)
                if ($util.Long)
                  (message.targetId = $util.Long.fromValue(
                    object.targetId
                  )).unsigned = false;
                else if (typeof object.targetId === "string")
                  message.targetId = parseInt(object.targetId, 10);
                else if (typeof object.targetId === "number")
                  message.targetId = object.targetId;
                else if (typeof object.targetId === "object")
                  message.targetId = new $util.LongBits(
                    object.targetId.low >>> 0,
                    object.targetId.high >>> 0
                  ).toNumber();
              if (object.medalLevel != null)
                if ($util.Long)
                  (message.medalLevel = $util.Long.fromValue(
                    object.medalLevel
                  )).unsigned = false;
                else if (typeof object.medalLevel === "string")
                  message.medalLevel = parseInt(object.medalLevel, 10);
                else if (typeof object.medalLevel === "number")
                  message.medalLevel = object.medalLevel;
                else if (typeof object.medalLevel === "object")
                  message.medalLevel = new $util.LongBits(
                    object.medalLevel.low >>> 0,
                    object.medalLevel.high >>> 0
                  ).toNumber();
              if (object.medalName != null)
                message.medalName = String(object.medalName);
              if (object.medalColor != null)
                if ($util.Long)
                  (message.medalColor = $util.Long.fromValue(
                    object.medalColor
                  )).unsigned = false;
                else if (typeof object.medalColor === "string")
                  message.medalColor = parseInt(object.medalColor, 10);
                else if (typeof object.medalColor === "number")
                  message.medalColor = object.medalColor;
                else if (typeof object.medalColor === "object")
                  message.medalColor = new $util.LongBits(
                    object.medalColor.low >>> 0,
                    object.medalColor.high >>> 0
                  ).toNumber();
              if (object.medalColorStart != null)
                if ($util.Long)
                  (message.medalColorStart = $util.Long.fromValue(
                    object.medalColorStart
                  )).unsigned = false;
                else if (typeof object.medalColorStart === "string")
                  message.medalColorStart = parseInt(
                    object.medalColorStart,
                    10
                  );
                else if (typeof object.medalColorStart === "number")
                  message.medalColorStart = object.medalColorStart;
                else if (typeof object.medalColorStart === "object")
                  message.medalColorStart = new $util.LongBits(
                    object.medalColorStart.low >>> 0,
                    object.medalColorStart.high >>> 0
                  ).toNumber();
              if (object.medalColorEnd != null)
                if ($util.Long)
                  (message.medalColorEnd = $util.Long.fromValue(
                    object.medalColorEnd
                  )).unsigned = false;
                else if (typeof object.medalColorEnd === "string")
                  message.medalColorEnd = parseInt(object.medalColorEnd, 10);
                else if (typeof object.medalColorEnd === "number")
                  message.medalColorEnd = object.medalColorEnd;
                else if (typeof object.medalColorEnd === "object")
                  message.medalColorEnd = new $util.LongBits(
                    object.medalColorEnd.low >>> 0,
                    object.medalColorEnd.high >>> 0
                  ).toNumber();
              if (object.medalColorBorder != null)
                if ($util.Long)
                  (message.medalColorBorder = $util.Long.fromValue(
                    object.medalColorBorder
                  )).unsigned = false;
                else if (typeof object.medalColorBorder === "string")
                  message.medalColorBorder = parseInt(
                    object.medalColorBorder,
                    10
                  );
                else if (typeof object.medalColorBorder === "number")
                  message.medalColorBorder = object.medalColorBorder;
                else if (typeof object.medalColorBorder === "object")
                  message.medalColorBorder = new $util.LongBits(
                    object.medalColorBorder.low >>> 0,
                    object.medalColorBorder.high >>> 0
                  ).toNumber();
              if (object.isLighted != null)
                if ($util.Long)
                  (message.isLighted = $util.Long.fromValue(
                    object.isLighted
                  )).unsigned = false;
                else if (typeof object.isLighted === "string")
                  message.isLighted = parseInt(object.isLighted, 10);
                else if (typeof object.isLighted === "number")
                  message.isLighted = object.isLighted;
                else if (typeof object.isLighted === "object")
                  message.isLighted = new $util.LongBits(
                    object.isLighted.low >>> 0,
                    object.isLighted.high >>> 0
                  ).toNumber();
              if (object.guardLevel != null)
                if ($util.Long)
                  (message.guardLevel = $util.Long.fromValue(
                    object.guardLevel
                  )).unsigned = false;
                else if (typeof object.guardLevel === "string")
                  message.guardLevel = parseInt(object.guardLevel, 10);
                else if (typeof object.guardLevel === "number")
                  message.guardLevel = object.guardLevel;
                else if (typeof object.guardLevel === "object")
                  message.guardLevel = new $util.LongBits(
                    object.guardLevel.low >>> 0,
                    object.guardLevel.high >>> 0
                  ).toNumber();
              if (object.special != null)
                message.special = String(object.special);
              if (object.iconId != null)
                if ($util.Long)
                  (message.iconId = $util.Long.fromValue(
                    object.iconId
                  )).unsigned = false;
                else if (typeof object.iconId === "string")
                  message.iconId = parseInt(object.iconId, 10);
                else if (typeof object.iconId === "number")
                  message.iconId = object.iconId;
                else if (typeof object.iconId === "object")
                  message.iconId = new $util.LongBits(
                    object.iconId.low >>> 0,
                    object.iconId.high >>> 0
                  ).toNumber();
              if (object.anchorRoomid != null)
                if ($util.Long)
                  (message.anchorRoomid = $util.Long.fromValue(
                    object.anchorRoomid
                  )).unsigned = false;
                else if (typeof object.anchorRoomid === "string")
                  message.anchorRoomid = parseInt(object.anchorRoomid, 10);
                else if (typeof object.anchorRoomid === "number")
                  message.anchorRoomid = object.anchorRoomid;
                else if (typeof object.anchorRoomid === "object")
                  message.anchorRoomid = new $util.LongBits(
                    object.anchorRoomid.low >>> 0,
                    object.anchorRoomid.high >>> 0
                  ).toNumber();
              if (object.score != null)
                if ($util.Long)
                  (message.score = $util.Long.fromValue(
                    object.score
                  )).unsigned = false;
                else if (typeof object.score === "string")
                  message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                  message.score = object.score;
                else if (typeof object.score === "object")
                  message.score = new $util.LongBits(
                    object.score.low >>> 0,
                    object.score.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a FansMedalInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo} message FansMedalInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FansMedalInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.targetId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.targetId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalLevel =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.medalLevel = options.longs === String ? "0" : 0;
                object.medalName = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalColor =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.medalColor = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalColorStart =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else
                  object.medalColorStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalColorEnd =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else
                  object.medalColorEnd = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.medalColorBorder =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else
                  object.medalColorBorder = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.isLighted =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.isLighted = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.guardLevel =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.guardLevel = options.longs === String ? "0" : 0;
                object.special = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.iconId =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.iconId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.anchorRoomid =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.anchorRoomid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.score =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.score = options.longs === String ? "0" : 0;
              }
              if (
                message.targetId != null &&
                message.hasOwnProperty("targetId")
              )
                if (typeof message.targetId === "number")
                  object.targetId =
                    options.longs === String
                      ? String(message.targetId)
                      : message.targetId;
                else
                  object.targetId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.targetId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.targetId.low >>> 0,
                          message.targetId.high >>> 0
                        ).toNumber()
                      : message.targetId;
              if (
                message.medalLevel != null &&
                message.hasOwnProperty("medalLevel")
              )
                if (typeof message.medalLevel === "number")
                  object.medalLevel =
                    options.longs === String
                      ? String(message.medalLevel)
                      : message.medalLevel;
                else
                  object.medalLevel =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.medalLevel)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalLevel.low >>> 0,
                          message.medalLevel.high >>> 0
                        ).toNumber()
                      : message.medalLevel;
              if (
                message.medalName != null &&
                message.hasOwnProperty("medalName")
              )
                object.medalName = message.medalName;
              if (
                message.medalColor != null &&
                message.hasOwnProperty("medalColor")
              )
                if (typeof message.medalColor === "number")
                  object.medalColor =
                    options.longs === String
                      ? String(message.medalColor)
                      : message.medalColor;
                else
                  object.medalColor =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.medalColor)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalColor.low >>> 0,
                          message.medalColor.high >>> 0
                        ).toNumber()
                      : message.medalColor;
              if (
                message.medalColorStart != null &&
                message.hasOwnProperty("medalColorStart")
              )
                if (typeof message.medalColorStart === "number")
                  object.medalColorStart =
                    options.longs === String
                      ? String(message.medalColorStart)
                      : message.medalColorStart;
                else
                  object.medalColorStart =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(
                          message.medalColorStart
                        )
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalColorStart.low >>> 0,
                          message.medalColorStart.high >>> 0
                        ).toNumber()
                      : message.medalColorStart;
              if (
                message.medalColorEnd != null &&
                message.hasOwnProperty("medalColorEnd")
              )
                if (typeof message.medalColorEnd === "number")
                  object.medalColorEnd =
                    options.longs === String
                      ? String(message.medalColorEnd)
                      : message.medalColorEnd;
                else
                  object.medalColorEnd =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(
                          message.medalColorEnd
                        )
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalColorEnd.low >>> 0,
                          message.medalColorEnd.high >>> 0
                        ).toNumber()
                      : message.medalColorEnd;
              if (
                message.medalColorBorder != null &&
                message.hasOwnProperty("medalColorBorder")
              )
                if (typeof message.medalColorBorder === "number")
                  object.medalColorBorder =
                    options.longs === String
                      ? String(message.medalColorBorder)
                      : message.medalColorBorder;
                else
                  object.medalColorBorder =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(
                          message.medalColorBorder
                        )
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.medalColorBorder.low >>> 0,
                          message.medalColorBorder.high >>> 0
                        ).toNumber()
                      : message.medalColorBorder;
              if (
                message.isLighted != null &&
                message.hasOwnProperty("isLighted")
              )
                if (typeof message.isLighted === "number")
                  object.isLighted =
                    options.longs === String
                      ? String(message.isLighted)
                      : message.isLighted;
                else
                  object.isLighted =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.isLighted)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.isLighted.low >>> 0,
                          message.isLighted.high >>> 0
                        ).toNumber()
                      : message.isLighted;
              if (
                message.guardLevel != null &&
                message.hasOwnProperty("guardLevel")
              )
                if (typeof message.guardLevel === "number")
                  object.guardLevel =
                    options.longs === String
                      ? String(message.guardLevel)
                      : message.guardLevel;
                else
                  object.guardLevel =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.guardLevel)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.guardLevel.low >>> 0,
                          message.guardLevel.high >>> 0
                        ).toNumber()
                      : message.guardLevel;
              if (message.special != null && message.hasOwnProperty("special"))
                object.special = message.special;
              if (message.iconId != null && message.hasOwnProperty("iconId"))
                if (typeof message.iconId === "number")
                  object.iconId =
                    options.longs === String
                      ? String(message.iconId)
                      : message.iconId;
                else
                  object.iconId =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.iconId)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.iconId.low >>> 0,
                          message.iconId.high >>> 0
                        ).toNumber()
                      : message.iconId;
              if (
                message.anchorRoomid != null &&
                message.hasOwnProperty("anchorRoomid")
              )
                if (typeof message.anchorRoomid === "number")
                  object.anchorRoomid =
                    options.longs === String
                      ? String(message.anchorRoomid)
                      : message.anchorRoomid;
                else
                  object.anchorRoomid =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.anchorRoomid)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.anchorRoomid.low >>> 0,
                          message.anchorRoomid.high >>> 0
                        ).toNumber()
                      : message.anchorRoomid;
              if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                  object.score =
                    options.longs === String
                      ? String(message.score)
                      : message.score;
                else
                  object.score =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.score)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.score.low >>> 0,
                          message.score.high >>> 0
                        ).toNumber()
                      : message.score;
              return object;
            };

            /**
             * Converts this FansMedalInfo to JSON.
             * @function toJSON
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FansMedalInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for FansMedalInfo
             * @function getTypeUrl
             * @memberof bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FansMedalInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo"
              );
            };

            return FansMedalInfo;
          })();

          InteractWord.UserAnchorRelation = (function () {
            /**
             * Properties of a UserAnchorRelation.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @interface IUserAnchorRelation
             * @property {string|null} [tailIcon] UserAnchorRelation tailIcon
             * @property {string|null} [tailGuideText] UserAnchorRelation tailGuideText
             * @property {number|null} [tailType] UserAnchorRelation tailType
             */

            /**
             * Constructs a new UserAnchorRelation.
             * @memberof bilibili.live.xuserreward.v1.InteractWord
             * @classdesc Represents a UserAnchorRelation.
             * @implements IUserAnchorRelation
             * @constructor
             * @param {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation=} [properties] Properties to set
             */
            function UserAnchorRelation(properties) {
              if (properties)
                for (
                  let keys = Object.keys(properties), i = 0;
                  i < keys.length;
                  ++i
                )
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserAnchorRelation tailIcon.
             * @member {string} tailIcon
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @instance
             */
            UserAnchorRelation.prototype.tailIcon = "";

            /**
             * UserAnchorRelation tailGuideText.
             * @member {string} tailGuideText
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @instance
             */
            UserAnchorRelation.prototype.tailGuideText = "";

            /**
             * UserAnchorRelation tailType.
             * @member {number} tailType
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @instance
             */
            UserAnchorRelation.prototype.tailType = $util.Long
              ? $util.Long.fromBits(0, 0, false)
              : 0;

            /**
             * Creates a new UserAnchorRelation instance using the specified properties.
             * @function create
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation=} [properties] Properties to set
             * @returns {bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation} UserAnchorRelation instance
             */
            UserAnchorRelation.create = function create(properties) {
              return new UserAnchorRelation(properties);
            };

            /**
             * Encodes the specified UserAnchorRelation message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.verify|verify} messages.
             * @function encode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation} message UserAnchorRelation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAnchorRelation.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (
                message.tailIcon != null &&
                Object.hasOwnProperty.call(message, "tailIcon")
              )
                writer
                  .uint32(/* id 1, wireType 2 =*/ 10)
                  .string(message.tailIcon);
              if (
                message.tailGuideText != null &&
                Object.hasOwnProperty.call(message, "tailGuideText")
              )
                writer
                  .uint32(/* id 2, wireType 2 =*/ 18)
                  .string(message.tailGuideText);
              if (
                message.tailType != null &&
                Object.hasOwnProperty.call(message, "tailType")
              )
                writer
                  .uint32(/* id 3, wireType 0 =*/ 24)
                  .int64(message.tailType);
              return writer;
            };

            /**
             * Encodes the specified UserAnchorRelation message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation} message UserAnchorRelation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAnchorRelation.encodeDelimited = function encodeDelimited(
              message,
              writer
            ) {
              return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserAnchorRelation message from the specified reader or buffer.
             * @function decode
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation} UserAnchorRelation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAnchorRelation.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              let end = length === undefined ? reader.len : reader.pos + length,
                message =
                  new $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation();
              while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error) break;
                switch (tag >>> 3) {
                  case 1: {
                    message.tailIcon = reader.string();
                    break;
                  }
                  case 2: {
                    message.tailGuideText = reader.string();
                    break;
                  }
                  case 3: {
                    message.tailType = reader.int64();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };

            /**
             * Decodes a UserAnchorRelation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation} UserAnchorRelation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAnchorRelation.decodeDelimited = function decodeDelimited(
              reader
            ) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserAnchorRelation message.
             * @function verify
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserAnchorRelation.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (
                message.tailIcon != null &&
                message.hasOwnProperty("tailIcon")
              )
                if (!$util.isString(message.tailIcon))
                  return "tailIcon: string expected";
              if (
                message.tailGuideText != null &&
                message.hasOwnProperty("tailGuideText")
              )
                if (!$util.isString(message.tailGuideText))
                  return "tailGuideText: string expected";
              if (
                message.tailType != null &&
                message.hasOwnProperty("tailType")
              )
                if (
                  !$util.isInteger(message.tailType) &&
                  !(
                    message.tailType &&
                    $util.isInteger(message.tailType.low) &&
                    $util.isInteger(message.tailType.high)
                  )
                )
                  return "tailType: integer|Long expected";
              return null;
            };

            /**
             * Creates a UserAnchorRelation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation} UserAnchorRelation
             */
            UserAnchorRelation.fromObject = function fromObject(object) {
              if (
                object instanceof
                $root.bilibili.live.xuserreward.v1.InteractWord
                  .UserAnchorRelation
              )
                return object;
              let message =
                new $root.bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation();
              if (object.tailIcon != null)
                message.tailIcon = String(object.tailIcon);
              if (object.tailGuideText != null)
                message.tailGuideText = String(object.tailGuideText);
              if (object.tailType != null)
                if ($util.Long)
                  (message.tailType = $util.Long.fromValue(
                    object.tailType
                  )).unsigned = false;
                else if (typeof object.tailType === "string")
                  message.tailType = parseInt(object.tailType, 10);
                else if (typeof object.tailType === "number")
                  message.tailType = object.tailType;
                else if (typeof object.tailType === "object")
                  message.tailType = new $util.LongBits(
                    object.tailType.low >>> 0,
                    object.tailType.high >>> 0
                  ).toNumber();
              return message;
            };

            /**
             * Creates a plain object from a UserAnchorRelation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation} message UserAnchorRelation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserAnchorRelation.toObject = function toObject(message, options) {
              if (!options) options = {};
              let object = {};
              if (options.defaults) {
                object.tailIcon = "";
                object.tailGuideText = "";
                if ($util.Long) {
                  let long = new $util.Long(0, 0, false);
                  object.tailType =
                    options.longs === String
                      ? long.toString()
                      : options.longs === Number
                      ? long.toNumber()
                      : long;
                } else object.tailType = options.longs === String ? "0" : 0;
              }
              if (
                message.tailIcon != null &&
                message.hasOwnProperty("tailIcon")
              )
                object.tailIcon = message.tailIcon;
              if (
                message.tailGuideText != null &&
                message.hasOwnProperty("tailGuideText")
              )
                object.tailGuideText = message.tailGuideText;
              if (
                message.tailType != null &&
                message.hasOwnProperty("tailType")
              )
                if (typeof message.tailType === "number")
                  object.tailType =
                    options.longs === String
                      ? String(message.tailType)
                      : message.tailType;
                else
                  object.tailType =
                    options.longs === String
                      ? $util.Long.prototype.toString.call(message.tailType)
                      : options.longs === Number
                      ? new $util.LongBits(
                          message.tailType.low >>> 0,
                          message.tailType.high >>> 0
                        ).toNumber()
                      : message.tailType;
              return object;
            };

            /**
             * Converts this UserAnchorRelation to JSON.
             * @function toJSON
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserAnchorRelation.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(
                this,
                $protobuf.util.toJSONOptions
              );
            };

            /**
             * Gets the default type url for UserAnchorRelation
             * @function getTypeUrl
             * @memberof bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserAnchorRelation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return (
                typeUrlPrefix +
                "/bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation"
              );
            };

            return UserAnchorRelation;
          })();

          return InteractWord;
        })();

        return v1;
      })();

      return xuserreward;
    })();

    return live;
  })();

  return bilibili;
})());

export { $root as default };
