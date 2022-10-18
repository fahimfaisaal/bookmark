(function() {
  // node_modules/tslib/tslib.es6.js
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
      }
      return value;
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOptionsObject.js
  function GetOptionsObject(options) {
    if (typeof options === "undefined") {
      return /* @__PURE__ */ Object.create(null);
    }
    if (typeof options === "object") {
      return options;
    }
    throw new TypeError("Options must be an object");
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsWellFormedCurrencyCode.js
  function toUpperCase(str) {
    return str.replace(/([a-z])/g, function(_, c) {
      return c.toUpperCase();
    });
  }
  var NOT_A_Z_REGEX = /[^A-Z]/;
  function IsWellFormedCurrencyCode(currency) {
    currency = toUpperCase(currency);
    if (currency.length !== 3) {
      return false;
    }
    if (NOT_A_Z_REGEX.test(currency)) {
      return false;
    }
    return true;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
      map.set(pl, /* @__PURE__ */ Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
  }
  function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
  }
  function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
      throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function(all, f) {
      all[f] = slots[f];
      return all;
    }, /* @__PURE__ */ Object.create(null));
  }
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList2(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/utils.js
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant2(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.has(candidate)) {
        return candidate;
      }
      var pos = candidate.lastIndexOf("-");
      if (!~pos) {
        return void 0;
      }
      if (pos >= 2 && candidate[pos - 2] === "-") {
        pos -= 2;
      }
      candidate = candidate.slice(0, pos);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = { locale: "" };
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var availableLocaleMap = {};
    var canonicalizedLocaleMap = {};
    var minimizedAvailableLocales = /* @__PURE__ */ new Set();
    availableLocales.forEach(function(locale2) {
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      var canonicalizedLocale = Intl.getCanonicalLocales(locale2)[0] || locale2;
      minimizedAvailableLocaleMap[minimizedLocale] = locale2;
      availableLocaleMap[locale2] = locale2;
      canonicalizedLocaleMap[canonicalizedLocale] = locale2;
      minimizedAvailableLocales.add(minimizedLocale);
      minimizedAvailableLocales.add(locale2);
      minimizedAvailableLocales.add(canonicalizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var l = requestedLocales_1[_i];
      if (foundLocale) {
        break;
      }
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      if (availableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      if (minimizedAvailableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      var locale = new Intl.Locale(noExtensionLocale);
      var maximizedRequestedLocale = locale.maximize().toString();
      var minimizedRequestedLocale = locale.minimize().toString();
      if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
        foundLocale = minimizedRequestedLocale;
        break;
      }
      foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    if (!foundLocale) {
      return { locale: getDefaultLocale() };
    }
    return {
      locale: availableLocaleMap[foundLocale] || canonicalizedLocaleMap[foundLocale] || minimizedAvailableLocaleMap[foundLocale] || foundLocale
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant2(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-".concat(key, "-");
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
      var start = pos + 4;
      var end = start;
      var k = start;
      var done = false;
      while (!done) {
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
          len = size - k;
        } else {
          len = e - k;
        }
        if (len === 2) {
          done = true;
        } else if (e === -1) {
          end = size;
          done = true;
        } else {
          end = e;
          k = e + 1;
        }
      }
      return extension.slice(start, end);
    }
    searchValue = "-".concat(key);
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
      return "";
    }
    return void 0;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = { locale: "", dataLocale: foundLocale };
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant2(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
      var foundLocaleData = localeData[foundLocale];
      invariant2(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
      var keyLocaleData = foundLocaleData[key];
      invariant2(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
      var value = keyLocaleData[0];
      invariant2(typeof value === "string" || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
        if (requestedValue !== void 0) {
          if (requestedValue !== "") {
            if (~keyLocaleData.indexOf(requestedValue)) {
              value = requestedValue;
              supportedExtensionAddition = "-".concat(key, "-").concat(value);
            }
          } else if (~requestedValue.indexOf("true")) {
            value = "true";
            supportedExtensionAddition = "-".concat(key);
          }
        }
      }
      if (key in options) {
        var optionsValue = options[key];
        invariant2(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
        if (~keyLocaleData.indexOf(optionsValue)) {
          if (optionsValue !== value) {
            value = optionsValue;
            supportedExtensionAddition = "";
          }
        }
      }
      result[key] = value;
      supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
      var privateIndex = foundLocale.indexOf("-x-");
      if (privateIndex === -1) {
        foundLocale = foundLocale + supportedExtension;
      } else {
        var preExtension = foundLocale.slice(0, privateIndex);
        var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
        foundLocale = preExtension + supportedExtension + postExtension;
      }
      foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/abstract/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/lib/index.js
  function match(requestedLocales, availableLocales, defaultLocale, opts) {
    var locales = availableLocales.reduce(function(all, l) {
      all.add(l);
      return all;
    }, /* @__PURE__ */ new Set());
    return ResolveLocale(locales, CanonicalizeLocaleList2(requestedLocales), {
      localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
      return defaultLocale;
    }).locale;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(availableLocales, requestedLocales);
    }
    return LookupSupportedLocales(availableLocales, requestedLocales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-displaynames/lib/abstract/CanonicalCodeForDisplayNames.js
  var UNICODE_REGION_SUBTAG_REGEX = /^([a-z]{2}|[0-9]{3})$/i;
  var ALPHA_4 = /^[a-z]{4}$/i;
  function isUnicodeRegionSubtag(region) {
    return UNICODE_REGION_SUBTAG_REGEX.test(region);
  }
  function isUnicodeScriptSubtag(script) {
    return ALPHA_4.test(script);
  }
  function CanonicalCodeForDisplayNames(type, code) {
    if (type === "language") {
      return CanonicalizeLocaleList([code])[0];
    }
    if (type === "region") {
      if (!isUnicodeRegionSubtag(code)) {
        throw RangeError("invalid region");
      }
      return code.toUpperCase();
    }
    if (type === "script") {
      if (!isUnicodeScriptSubtag(code)) {
        throw RangeError("invalid script");
      }
      return "".concat(code[0].toUpperCase()).concat(code.slice(1).toLowerCase());
    }
    invariant(type === "currency", "invalid type");
    if (!IsWellFormedCurrencyCode(code)) {
      throw RangeError("invalid currency");
    }
    return code.toUpperCase();
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-displaynames/lib/index.js
  var DisplayNames = function() {
    function DisplayNames2(locales, options) {
      var _newTarget = this.constructor;
      if (_newTarget === void 0) {
        throw TypeError("Constructor Intl.DisplayNames requires 'new'");
      }
      var requestedLocales = CanonicalizeLocaleList(locales);
      options = GetOptionsObject(options);
      var opt = /* @__PURE__ */ Object.create(null);
      var localeData = DisplayNames2.localeData;
      var matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
      opt.localeMatcher = matcher;
      var r = ResolveLocale(DisplayNames2.availableLocales, requestedLocales, opt, [], DisplayNames2.localeData, DisplayNames2.getDefaultLocale);
      var style = GetOption(options, "style", "string", ["narrow", "short", "long"], "long");
      setSlot(this, "style", style);
      var type = GetOption(options, "type", "string", ["language", "currency", "region", "script"], void 0);
      if (type === void 0) {
        throw TypeError('Intl.DisplayNames constructor requires "type" option');
      }
      setSlot(this, "type", type);
      var fallback = GetOption(options, "fallback", "string", ["code", "none"], "code");
      setSlot(this, "fallback", fallback);
      setSlot(this, "locale", r.locale);
      var dataLocale = r.dataLocale;
      var dataLocaleData = localeData[dataLocale];
      invariant(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
      setSlot(this, "localeData", dataLocaleData);
      invariant(dataLocaleData !== void 0, "locale data for ".concat(r.locale, " does not exist."));
      var types = dataLocaleData.types;
      invariant(typeof types === "object" && types != null, "invalid types data");
      var typeFields = types[type];
      invariant(typeof typeFields === "object" && typeFields != null, "invalid typeFields data");
      var styleFields = typeFields[style];
      invariant(typeof styleFields === "object" && styleFields != null, "invalid styleFields data");
      setSlot(this, "fields", styleFields);
    }
    DisplayNames2.supportedLocalesOf = function(locales, options) {
      return SupportedLocales(DisplayNames2.availableLocales, CanonicalizeLocaleList(locales), options);
    };
    DisplayNames2.__addLocaleData = function() {
      var data = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
      }
      for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var _b = data_1[_a], d = _b.data, locale = _b.locale;
        var minimizedLocale = new Intl.Locale(locale).minimize().toString();
        DisplayNames2.localeData[locale] = DisplayNames2.localeData[minimizedLocale] = d;
        DisplayNames2.availableLocales.add(minimizedLocale);
        DisplayNames2.availableLocales.add(locale);
        if (!DisplayNames2.__defaultLocale) {
          DisplayNames2.__defaultLocale = minimizedLocale;
        }
      }
    };
    DisplayNames2.prototype.of = function(code) {
      checkReceiver(this, "of");
      var type = getSlot(this, "type");
      var codeAsString = ToString(code);
      if (!isValidCodeForDisplayNames(type, codeAsString)) {
        throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
      }
      var _a = getMultiInternalSlots(__INTERNAL_SLOT_MAP__, this, "localeData", "style", "fallback"), localeData = _a.localeData, style = _a.style, fallback = _a.fallback;
      var canonicalCode = CanonicalCodeForDisplayNames(type, codeAsString);
      var regionSubTag;
      if (type === "language") {
        var regionMatch = /-([a-z]{2}|\d{3})\b/i.exec(canonicalCode);
        if (regionMatch) {
          canonicalCode = canonicalCode.substring(0, regionMatch.index) + canonicalCode.substring(regionMatch.index + regionMatch[0].length);
          regionSubTag = regionMatch[1];
        }
      }
      var typesData = localeData.types[type];
      var name = typesData[style][canonicalCode] || typesData.long[canonicalCode];
      if (name !== void 0) {
        if (regionSubTag) {
          var regionsData = localeData.types.region;
          var regionDisplayName = regionsData[style][regionSubTag] || regionsData.long[regionSubTag];
          if (regionDisplayName || fallback === "code") {
            var pattern = localeData.patterns.locale;
            return pattern.replace("{0}", name).replace("{1}", regionDisplayName || regionSubTag);
          }
        } else {
          return name;
        }
      }
      if (fallback === "code") {
        return codeAsString;
      }
    };
    DisplayNames2.prototype.resolvedOptions = function() {
      checkReceiver(this, "resolvedOptions");
      return __assign({}, getMultiInternalSlots(__INTERNAL_SLOT_MAP__, this, "locale", "style", "type", "fallback"));
    };
    DisplayNames2.getDefaultLocale = function() {
      return DisplayNames2.__defaultLocale;
    };
    DisplayNames2.localeData = {};
    DisplayNames2.availableLocales = /* @__PURE__ */ new Set();
    DisplayNames2.__defaultLocale = "";
    DisplayNames2.polyfilled = true;
    return DisplayNames2;
  }();
  function isValidCodeForDisplayNames(type, code) {
    switch (type) {
      case "language":
        return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(code);
      case "region":
        return /^([a-z]{2}|\d{3})$/i.test(code);
      case "script":
        return /^[a-z]{4}$/i.test(code);
      case "currency":
        return IsWellFormedCurrencyCode(code);
    }
  }
  try {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(DisplayNames.prototype, Symbol.toStringTag, {
        value: "Intl.DisplayNames",
        configurable: true,
        enumerable: false,
        writable: false
      });
    }
    Object.defineProperty(DisplayNames, "length", {
      value: 2,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }
  var __INTERNAL_SLOT_MAP__ = /* @__PURE__ */ new WeakMap();
  function getSlot(instance, key) {
    return getInternalSlot(__INTERNAL_SLOT_MAP__, instance, key);
  }
  function setSlot(instance, key, value) {
    setInternalSlot(__INTERNAL_SLOT_MAP__, instance, key, value);
  }
  function checkReceiver(receiver, methodName) {
    if (!(receiver instanceof DisplayNames)) {
      throw TypeError("Method Intl.DisplayNames.prototype.".concat(methodName, " called on incompatible receiver"));
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-displaynames/lib/supported-locales.js
  var supportedLocales = ["af-NA", "af", "agq", "ak", "am", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "ar", "as", "asa", "ast", "az-Cyrl", "az-Latn", "az", "bas", "be-tarask", "be", "bem", "bez", "bg", "bm", "bn-IN", "bn", "bo-IN", "bo", "br", "brx", "bs-Cyrl", "bs-Latn", "bs", "ca-AD", "ca-ES-valencia", "ca-FR", "ca-IT", "ca", "ccp-IN", "ccp", "ce", "ceb", "cgg", "chr", "ckb-IR", "ckb", "cs", "cy", "da-GL", "da", "dav", "de-AT", "de-BE", "de-CH", "de-IT", "de-LI", "de-LU", "de", "dje", "doi", "dsb", "dua", "dyo", "dz", "ebu", "ee-TG", "ee", "el-CY", "el", "en-001", "en-150", "en-AE", "en-AG", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH", "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK", "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE", "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "en", "eo", "es-419", "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "es", "et", "eu", "ewo", "fa-AF", "fa", "ff-Adlm-BF", "ff-Adlm-CM", "ff-Adlm-GH", "ff-Adlm-GM", "ff-Adlm-GW", "ff-Adlm-LR", "ff-Adlm-MR", "ff-Adlm-NE", "ff-Adlm-NG", "ff-Adlm-SL", "ff-Adlm-SN", "ff-Adlm", "ff-Latn-BF", "ff-Latn-CM", "ff-Latn-GH", "ff-Latn-GM", "ff-Latn-GN", "ff-Latn-GW", "ff-Latn-LR", "ff-Latn-MR", "ff-Latn-NE", "ff-Latn-NG", "ff-Latn-SL", "ff-Latn", "ff", "fi", "fil", "fo-DK", "fo", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fr", "fur", "fy", "ga-GB", "ga", "gd", "gl", "gsw-FR", "gsw-LI", "gsw", "gu", "guz", "gv", "ha-GH", "ha-NE", "ha", "haw", "he", "hi", "hr-BA", "hr", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "is", "it-CH", "it-SM", "it-VA", "it", "ja", "jgo", "jmc", "jv", "ka", "kab", "kam", "kde", "kea", "kgp", "khq", "ki", "kk", "kkj", "kl", "kln", "km", "kn", "ko-KP", "ko", "kok", "ks-Arab", "ks", "ksb", "ksf", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lkt", "ln-AO", "ln-CF", "ln-CG", "ln", "lo", "lrc-IQ", "lrc", "lt", "lu", "luo", "luy", "lv", "mai", "mas-TZ", "mas", "mer", "mfe", "mg", "mgh", "mgo", "mi", "mk", "ml", "mn", "mni-Beng", "mni", "mr", "ms-BN", "ms-ID", "ms-SG", "ms", "mt", "mua", "my", "mzn", "naq", "nb-SJ", "nb", "nd", "nds-NL", "nds", "ne-IN", "ne", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-SR", "nl-SX", "nl", "nmg", "nn", "nnh", "no", "nus", "nyn", "om-KE", "om", "or", "os-RU", "os", "pa-Arab", "pa-Guru", "pa", "pcm", "pl", "ps-PK", "ps", "pt-AO", "pt-CH", "pt-CV", "pt-GQ", "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "pt", "qu-BO", "qu-EC", "qu", "rm", "rn", "ro-MD", "ro", "rof", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-UA", "ru", "rw", "rwk", "sa", "sah", "saq", "sat-Olck", "sat", "sbp", "sc", "sd-Arab", "sd-Deva", "sd", "se-FI", "se-SE", "se", "seh", "ses", "sg", "shi-Latn", "shi-Tfng", "shi", "si", "sk", "sl", "smn", "sn", "so-DJ", "so-ET", "so-KE", "so", "sq-MK", "sq-XK", "sq", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK", "sr-Cyrl", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-XK", "sr-Latn", "sr", "su-Latn", "su", "sv-AX", "sv-FI", "sv", "sw-CD", "sw-KE", "sw-UG", "sw", "ta-LK", "ta-MY", "ta-SG", "ta", "te", "teo-KE", "teo", "tg", "th", "ti-ER", "ti", "tk", "to", "tr-CY", "tr", "tt", "twq", "tzm", "ug", "uk", "und", "ur-IN", "ur", "uz-Arab", "uz-Cyrl", "uz-Latn", "uz", "vai-Latn", "vai-Vaii", "vai", "vi", "vun", "wae", "wo", "xh", "xog", "yav", "yi", "yo-BJ", "yo", "yrl-CO", "yrl-VE", "yrl", "yue-Hans", "yue-Hant", "yue", "zgh", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hans", "zh-Hant-HK", "zh-Hant-MO", "zh-Hant", "zh", "zu"];

  // bazel-out/darwin-fastbuild/bin/packages/intl-displaynames/lib/should-polyfill.js
  function hasMissingICUBug() {
    var DisplayNames2 = Intl.DisplayNames;
    if (DisplayNames2 && !DisplayNames2.polyfilled) {
      return new DisplayNames2(["en"], {
        type: "region"
      }).of("CA") === "CA";
    }
    return false;
  }
  function hasScriptBug() {
    var DisplayNames2 = Intl.DisplayNames;
    if (DisplayNames2 && !DisplayNames2.polyfilled) {
      return new DisplayNames2(["en"], {
        type: "script"
      }).of("arab") !== "Arabic";
    }
    return false;
  }
  function supportedLocalesOf(locale) {
    if (!locale) {
      return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return Intl.DisplayNames.supportedLocalesOf(locales).length === locales.length;
  }
  function _shouldPolyfillWithoutLocale() {
    return !Intl.DisplayNames || hasMissingICUBug() || hasScriptBug();
  }
  function shouldPolyfill(locale) {
    if (locale === void 0) {
      locale = "en";
    }
    if (_shouldPolyfillWithoutLocale() || !supportedLocalesOf(locale)) {
      return match([locale], supportedLocales, "en");
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-displaynames/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "DisplayNames", {
      value: DisplayNames,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=polyfill.iife.js.map
