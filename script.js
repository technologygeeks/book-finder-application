(function (_0x1062ab, _0x1c7417) {
  function _0x2144a5(_0x5dfed8, _0x59b2fe, _0x1b71de) {
    return _0x4d73(_0x59b2fe - -0x382, _0x5dfed8);
  }
  const _0x156db8 = _0x1062ab();
  while (!![]) {
    try {
      const _0x2924e9 =
        (parseInt(_0x2144a5(-0x147, -0x160, -0x135)) / 0x1) *
          (parseInt(_0x2144a5(-0x155, -0x15a, -0x169)) / 0x2) +
        (parseInt(_0x2144a5(-0x176, -0x17a, -0x15d)) / 0x3) *
          (-parseInt(_0x2144a5(-0x17a, -0x18e, -0x179)) / 0x4) +
        (parseInt(_0x2144a5(-0x175, -0x18c, -0x170)) / 0x5) *
          (-parseInt(_0x2144a5(-0x19d, -0x178, -0x15a)) / 0x6) +
        parseInt(_0x2144a5(-0x188, -0x16a, -0x154)) / 0x7 +
        parseInt(_0x2144a5(-0x182, -0x16d, -0x142)) / 0x8 +
        -parseInt(_0x2144a5(-0x1b5, -0x1a4, -0x1ad)) / 0x9 +
        (-parseInt(_0x2144a5(-0x15d, -0x17d, -0x15e)) / 0xa) *
          (-parseInt(_0x2144a5(-0x152, -0x165, -0x169)) / 0xb);
      if (_0x2924e9 === _0x1c7417) break;
      else _0x156db8["push"](_0x156db8["shift"]());
    } catch (_0x26e4e3) {
      _0x156db8["push"](_0x156db8["shift"]());
    }
  }
})(_0x49de, 0x25a2b);
const height = window[_0x210bd1(0x446, 0x43a, 0x44d)],
  width = window[_0x210bd1(0x419, 0x40d, 0x41a)];
var book_title = [],
  book_author = [],
  book_publisher = [],
  image_links = [],
  book_published_date = [],
  book_descript = [],
  url;
let search_button = document[_0x210bd1(0x44d, 0x428, 0x44e)]("search-btn"),
  reset_button = document["getElementById"](_0x210bd1(0x405, 0x3f0, 0x3e2)),
  user_input = document["getElementById"](_0x210bd1(0x419, 0x437, 0x40d)),
  mark_btn = document[_0x210bd1(0x3fe, 0x428, 0x429)](
    _0x210bd1(0x41f, 0x408, 0x403)
  );
user_input[_0x210bd1(0x40d, 0x422, 0x418)](
  _0x210bd1(0x43f, 0x43c, 0x425),
  function (_0xdd2efa) {
    function _0x3f4537(_0x47fa1b, _0x47f433, _0x391e63) {
      return _0x210bd1(_0x47f433, _0x391e63 - -0x32d, _0x391e63 - 0x60);
    }
    _0xdd2efa[_0x3f4537(0x101, 0xdc, 0x104)] === _0x3f4537(0xb1, 0xe1, 0xd6) &&
      performSearch();
  }
),
  search_button[_0x210bd1(0x445, 0x422, 0x439)]("click", function () {
    performSearch();
  });
function _0x4d73(_0x1b938f, _0x1d1d9b) {
  const _0x49de70 = _0x49de();
  return (
    (_0x4d73 = function (_0x4d7301, _0x355564) {
      _0x4d7301 = _0x4d7301 - 0x1da;
      let _0x44d429 = _0x49de70[_0x4d7301];
      return _0x44d429;
    }),
    _0x4d73(_0x1b938f, _0x1d1d9b)
  );
}
function performSearch() {
  let _0x1880fd = user_input["value"]["trim"]();
  mark_btn[_0x950bba(0x3a2, 0x3be, 0x3d5)][_0x950bba(0x37e, 0x39b, 0x38b)](
    "fa-xmark"
  );
  if (!_0x1880fd) {
    alert(_0x950bba(0x38f, 0x39e, 0x38c));
    return;
  }
  let _0xae3715 = sanitizeInput(_0x1880fd);
  function _0x950bba(_0x52ab25, _0x3dc12c, _0x35736d) {
    return _0x210bd1(_0x35736d, _0x3dc12c - -0x70, _0x35736d - 0x85);
  }
  (url = _0x950bba(0x3aa, 0x3c8, 0x3d8) + encodeURIComponent(_0xae3715)),
    fetch(url)
      [_0x950bba(0x3b2, 0x3bf, 0x39e)]((_0x298669) =>
        _0x298669[_0x950bba(0x3d8, 0x3b0, 0x3a5)]()
      )
      [_0x950bba(0x3bc, 0x3bf, 0x3b0)]((_0x42e513) => {
        for (let _0x47fc89 = 0x0; _0x47fc89 < 0xa; _0x47fc89++) {
          if (
            !Wrong_terms(
              _0x42e513[_0x55bdba(0x3fa, 0x406, 0x417)][_0x47fc89][
                _0x55bdba(0x410, 0x427, 0x415)
              ][_0x55bdba(0x423, 0x427, 0x442)]
            ) &&
            !Wrong_terms(
              _0x42e513[_0x55bdba(0x3fa, 0x3de, 0x3ed)][_0x47fc89][
                _0x55bdba(0x410, 0x3e8, 0x3f7)
              ][_0x55bdba(0x423, 0x43a, 0x426)]
            )
          ) {
            let _0x2274d9 =
              _0x42e513[_0x55bdba(0x3fa, 0x3ec, 0x3d2)][_0x47fc89][
                "volumeInfo"
              ][_0x55bdba(0x446, 0x42a, 0x46a)][0x0];
            book_author[_0x55bdba(0x420, 0x3fc, 0x405)](escapeHtml(_0x2274d9)),
              book_title[_0x55bdba(0x420, 0x422, 0x414)](
                escapeHtml(
                  _0x42e513[_0x55bdba(0x3fa, 0x3e2, 0x3ff)][_0x47fc89][
                    _0x55bdba(0x410, 0x401, 0x436)
                  ][_0x55bdba(0x423, 0x446, 0x433)]
                )
              ),
              book_descript[_0x55bdba(0x420, 0x411, 0x408)](
                escapeHtml(
                  _0x42e513[_0x55bdba(0x3fa, 0x3f3, 0x3d8)][_0x47fc89][
                    _0x55bdba(0x410, 0x3f7, 0x3f3)
                  ][_0x55bdba(0x430, 0x444, 0x427)]
                    ? _0x42e513[_0x55bdba(0x3fa, 0x415, 0x3d8)][_0x47fc89][
                        _0x55bdba(0x410, 0x42a, 0x3ff)
                      ]["description"]
                    : _0x55bdba(0x407, 0x3e1, 0x400)
                )
              ),
              image_links[_0x55bdba(0x420, 0x448, 0x440)](
                _0x42e513[_0x55bdba(0x3fa, 0x3d0, 0x3d5)][_0x47fc89][
                  _0x55bdba(0x410, 0x432, 0x3eb)
                ][_0x55bdba(0x412, 0x406, 0x3e8)]
                  ? _0x42e513["items"][_0x47fc89][
                      _0x55bdba(0x410, 0x427, 0x42c)
                    ][_0x55bdba(0x412, 0x41f, 0x439)][
                      _0x55bdba(0x40b, 0x3fb, 0x3ee)
                    ]
                  : _0x55bdba(0x41d, 0x42b, 0x447)
              ),
              book_publisher[_0x55bdba(0x420, 0x426, 0x443)](
                escapeHtml(
                  _0x42e513["items"][_0x47fc89][_0x55bdba(0x410, 0x40e, 0x3ed)][
                    _0x55bdba(0x42e, 0x411, 0x422)
                  ]
                    ? _0x42e513[_0x55bdba(0x3fa, 0x401, 0x41b)][_0x47fc89][
                        _0x55bdba(0x410, 0x439, 0x414)
                      ]["publisher"]
                    : _0x55bdba(0x42c, 0x416, 0x42f)
                )
              ),
              book_published_date[_0x55bdba(0x420, 0x409, 0x447)](
                escapeHtml(
                  _0x42e513[_0x55bdba(0x3fa, 0x3f6, 0x412)][_0x47fc89][
                    _0x55bdba(0x410, 0x40d, 0x401)
                  ]["publishedDate"]
                    ? _0x42e513["items"][_0x47fc89][
                        _0x55bdba(0x410, 0x42b, 0x427)
                      ][_0x55bdba(0x44c, 0x448, 0x432)]
                    : "Unknown"
                )
              );
          } else {
            alert(_0x55bdba(0x43d, 0x458, 0x412)),
              location[_0x55bdba(0x422, 0x446, 0x44d)]();
            break;
          }
        }
        function _0x55bdba(_0x2cea08, _0x5bae01, _0x31dcf9) {
          return _0x950bba(_0x2cea08 - 0x19c, _0x2cea08 - 0x81, _0x31dcf9);
        }
        document[_0x55bdba(0x439, 0x45d, 0x42e)](
          _0x55bdba(0x40f, 0x431, 0x40e)
        )[_0x55bdba(0x3fe, 0x3f2, 0x3f7)](),
          test_the_code(
            book_title,
            image_links,
            book_author,
            book_publisher,
            book_descript,
            book_published_date
          );
      })
      [_0x950bba(0x3b2, 0x388, 0x366)]((_0x3a2763) => {
        console[_0x312abe(0x1df, 0x1e8, 0x207)](
          "Error\x20fetching\x20data:",
          _0x3a2763
        );
        function _0x312abe(_0x8c08e9, _0x262ce7, _0x352499) {
          return _0x950bba(_0x8c08e9 - 0x1c4, _0x352499 - -0x189, _0x262ce7);
        }
        alert("Error\x20fetching\x20data.\x20Please\x20try\x20again\x20later."),
          location[_0x312abe(0x23f, 0x200, 0x218)]();
      });
}
let control_flow = 0x0;
var card_div = document["createElement"](_0x210bd1(0x43c, 0x419, 0x439));
function _0x210bd1(_0x18945f, _0x4f9718, _0x4c68e3) {
  return _0x4d73(_0x4f9718 - 0x20e, _0x18945f);
}
card_div[_0x210bd1(0x408, 0x42e, 0x437)]["add"](_0x210bd1(0x3f3, 0x40a, 0x423));
function test_the_code(
  _0x256163,
  _0x1a899d,
  _0x2eccea,
  _0xf7304,
  _0x1e3583,
  _0x56b5ec
) {
  let _0xf213fd = document["getElementById"](_0x1f3416(0x376, 0x390, 0x3a4));
  function _0x1f3416(_0x3bc83d, _0xf4edd0, _0x30debe) {
    return _0x210bd1(_0x3bc83d, _0xf4edd0 - -0x65, _0x30debe - 0x17e);
  }
  _0xf213fd["appendChild"](card_div);
  for (
    let _0x50adec = 0x0;
    _0x50adec < _0x256163[_0x1f3416(0x3a9, 0x3c0, 0x3cf)];
    _0x50adec++
  ) {
    let _0x5d7e69 = document["createElement"](_0x1f3416(0x3a6, 0x3b4, 0x3d3));
    _0x5d7e69[_0x1f3416(0x3d6, 0x3c9, 0x3cf)][_0x1f3416(0x399, 0x3a6, 0x3c0)](
      _0x1f3416(0x3b3, 0x3b0, 0x3ad)
    ),
      card_div["appendChild"](_0x5d7e69);
    let _0x1e7d8a = document[_0x1f3416(0x3ba, 0x3d4, 0x3cd)](
        _0x1f3416(0x360, 0x383, 0x358)
      ),
      _0x5063a8 = document[_0x1f3416(0x3f0, 0x3d4, 0x3bd)]("span");
    _0x5063a8[_0x1f3416(0x3ab, 0x3c9, 0x3c5)][_0x1f3416(0x3bc, 0x3a6, 0x3b2)](
      _0x1f3416(0x3c2, 0x3ad, 0x3b7)
    );
    let _0x491cef = document["createElement"](_0x1f3416(0x398, 0x398, 0x3b6));
    _0x491cef[_0x1f3416(0x3b6, 0x3c9, 0x3ad)][_0x1f3416(0x38c, 0x3a6, 0x394)](
      _0x1f3416(0x37f, 0x394, 0x378)
    );
    let _0x3dbcb5 = document["createElement"](_0x1f3416(0x36d, 0x398, 0x3b8));
    _0x3dbcb5["classList"][_0x1f3416(0x3cb, 0x3a6, 0x3c2)](
      _0x1f3416(0x3d2, 0x3b8, 0x39e)
    );
    let _0x773074 = document[_0x1f3416(0x3c8, 0x3d4, 0x3b2)](
      _0x1f3416(0x39a, 0x398, 0x386)
    );
    _0x773074[_0x1f3416(0x3c9, 0x3c9, 0x3b3)][_0x1f3416(0x37e, 0x3a6, 0x3c8)](
      "date"
    );
    let _0x4ab2ee = document[_0x1f3416(0x3b9, 0x3d4, 0x3d9)](
        _0x1f3416(0x370, 0x38c, 0x38a)
      ),
      _0x265987 = document[_0x1f3416(0x39d, 0x3a0, 0x379)](
        _0x1f3416(0x375, 0x389, 0x374)
      );
    (_0x1e7d8a[_0x1f3416(0x37d, 0x38f, 0x3b2)] = _0x1a899d[_0x50adec]),
      (_0x5063a8[_0x1f3416(0x39b, 0x3c5, 0x3cf)] = _0x256163[_0x50adec]),
      _0x5d7e69[_0x1f3416(0x3b8, 0x396, 0x3bf)](_0x1e7d8a),
      _0x5d7e69[_0x1f3416(0x3a5, 0x396, 0x377)](_0x5063a8),
      _0x4ab2ee["appendChild"](_0x265987),
      _0x5d7e69[_0x1f3416(0x380, 0x396, 0x3a5)](_0x4ab2ee),
      _0x4ab2ee[_0x1f3416(0x3ca, 0x3bd, 0x3cb)]("click", () => {
        display_description(
          _0x256163[_0x50adec],
          _0x1a899d[_0x50adec],
          _0x2eccea[_0x50adec],
          _0xf7304[_0x50adec],
          _0x56b5ec[_0x50adec],
          _0x1e3583[_0x50adec]
        );
      });
  }
}
reset_button["addEventListener"](_0x210bd1(0x403, 0x41c, 0x3fa), () => {
  function _0x7cbd8e(_0x29eec3, _0x144fa0, _0x1d711f) {
    return _0x210bd1(_0x1d711f, _0x29eec3 - 0x29, _0x1d711f - 0x173);
  }
  location[_0x7cbd8e(0x43a, 0x41e, 0x458)]();
});
function display_description(
  _0x1a0f52,
  _0x9f602,
  _0x9c8e06,
  _0x36c409,
  _0x3ad347,
  _0x133bde
) {
  card_div[_0x19d04c(0x4ba, 0x4c7, 0x4df)][_0x19d04c(0x4d9, 0x4c5, 0x4e9)] =
    "blur(10px)";
  let _0x37752a = document[_0x19d04c(0x52c, 0x50d, 0x501)](
      _0x19d04c(0x4ea, 0x4da, 0x4ce)
    ),
    _0x27a0d8 = document[_0x19d04c(0x532, 0x4f7, 0x512)](
      _0x19d04c(0x51b, 0x4ce, 0x4f2)
    );
  _0x27a0d8["classList"][_0x19d04c(0x4ed, 0x4e9, 0x4e4)]("popup-div");
  let _0x52be40 = document[_0x19d04c(0x538, 0x4fa, 0x512)](
    _0x19d04c(0x4e1, 0x50a, 0x4f2)
  );
  _0x52be40["classList"]["add"](_0x19d04c(0x521, 0x525, 0x502)),
    _0x37752a[_0x19d04c(0x4cf, 0x4f8, 0x4d4)](_0x27a0d8),
    _0x27a0d8[_0x19d04c(0x4d1, 0x4df, 0x4d4)](_0x52be40);
  let _0x2fec0b = document[_0x19d04c(0x500, 0x528, 0x512)](
    _0x19d04c(0x4b4, 0x4bc, 0x4c1)
  );
  _0x2fec0b[_0x19d04c(0x518, 0x525, 0x507)][_0x19d04c(0x4c6, 0x4f7, 0x4e4)](
    _0x19d04c(0x4c3, 0x4ff, 0x4ed)
  );
  let _0x188701 = document["createElement"]("h1");
  function _0x19d04c(_0xaae0f5, _0x5482ce, _0x2a56c6) {
    return _0x210bd1(_0x5482ce, _0x2a56c6 - 0xd9, _0x2a56c6 - 0xe0);
  }
  _0x188701["classList"][_0x19d04c(0x4f1, 0x4ba, 0x4e4)]("author");
  let _0x17e569 = document[_0x19d04c(0x52d, 0x4f0, 0x512)](
    _0x19d04c(0x4f8, 0x4f1, 0x4d6)
  );
  _0x17e569[_0x19d04c(0x523, 0x4f3, 0x507)][_0x19d04c(0x4ea, 0x4f1, 0x4e4)](
    _0x19d04c(0x4ce, 0x4ee, 0x4e0)
  );
  let _0x42c460 = document["createElement"](_0x19d04c(0x4e2, 0x4b1, 0x4d6)),
    _0x56939d = document[_0x19d04c(0x4ee, 0x4e7, 0x512)]("p"),
    _0x4e1f75 = document["createElement"](_0x19d04c(0x4e8, 0x4bb, 0x4ca));
  _0x4e1f75[_0x19d04c(0x4f0, 0x4ef, 0x507)]["add"](
    _0x19d04c(0x527, 0x526, 0x4fd)
  ),
    _0x4e1f75["classList"]["add"](_0x19d04c(0x50e, 0x4e4, 0x4fa)),
    _0x42c460[_0x19d04c(0x513, 0x514, 0x507)][_0x19d04c(0x4fd, 0x4d1, 0x4e4)](
      _0x19d04c(0x4ad, 0x4ef, 0x4d5)
    ),
    (_0x2fec0b[_0x19d04c(0x4b8, 0x4f6, 0x4cd)] = _0x9f602),
    (_0x188701[_0x19d04c(0x4f5, 0x50f, 0x503)] =
      _0x19d04c(0x52a, 0x505, 0x516) +
      _0x9c8e06 +
      _0x19d04c(0x4f9, 0x4e7, 0x506)),
    (_0x17e569[_0x19d04c(0x4f7, 0x4f2, 0x503)] = _0x36c409),
    (_0x42c460["innerHTML"] = _0x3ad347),
    (_0x56939d[_0x19d04c(0x52c, 0x51e, 0x503)] = _0x133bde),
    _0x52be40["append"](
      _0x2fec0b,
      _0x188701,
      _0x17e569,
      _0x42c460,
      _0x56939d,
      _0x4e1f75
    ),
    _0x4e1f75[_0x19d04c(0x4f6, 0x501, 0x4fb)](
      _0x19d04c(0x4d2, 0x4fd, 0x4f5),
      () => {
        card_div[_0x5d59cc(0x1cc, 0x1b4, 0x1f7)]["filter"] = _0x5d59cc(
          0x1b5,
          0x19f,
          0x1af
        );
        function _0x5d59cc(_0x3faad9, _0x18d138, _0xaa428f) {
          return _0x19d04c(_0x3faad9 - 0x1c3, _0x18d138, _0x3faad9 - -0x313);
        }
        _0x27a0d8[_0x5d59cc(0x1b3, 0x19d, 0x1c5)]();
      }
    );
}
function Wrong_terms(_0x1fd976) {
  const _0x294145 = [
    _0x4817fd(-0x9b, -0xa1, -0xa0),
    _0x4817fd(-0x9a, -0xdf, -0xbd),
    _0x4817fd(-0xc9, -0xb2, -0xdd),
    _0x4817fd(-0xf4, -0xc3, -0xcb),
    _0x4817fd(-0xd4, -0xbf, -0xe1),
    _0x4817fd(-0x10b, -0xb8, -0xe2),
  ];
  function _0x4817fd(_0x5c093c, _0x235e70, _0x1b5455) {
    return _0x210bd1(_0x5c093c, _0x1b5455 - -0x4d4, _0x1b5455 - 0x19d);
  }
  for (const _0xf998d4 of _0x294145) {
    if (
      _0x1fd976[_0x4817fd(-0x9a, -0x7c, -0xa1)]()[
        _0x4817fd(-0xcb, -0xfa, -0xea)
      ](_0xf998d4)
    )
      return !![];
  }
}
function sanitizeInput(_0x53f542) {
  function _0x24e09b(_0x496514, _0x649957, _0x5b5d21) {
    return _0x210bd1(_0x5b5d21, _0x496514 - -0x46c, _0x5b5d21 - 0x15d);
  }
  return _0x53f542[_0x24e09b(-0x52, -0x2a, -0x7a)](/[^\w\s]/gi, "");
}
function escapeHtml(_0x89edf9) {
  function _0x43e6bd(_0x5c097c, _0x13c96e, _0x4dc152) {
    return _0x210bd1(_0x4dc152, _0x5c097c - 0x1c6, _0x4dc152 - 0xc8);
  }
  return _0x89edf9[_0x43e6bd(0x5e0, 0x5d7, 0x5f6)](/&/g, "&amp;")
    ["replace"](/</g, _0x43e6bd(0x5ed, 0x5d2, 0x60a))
    ["replace"](/>/g, _0x43e6bd(0x5e4, 0x605, 0x5f6))
    ["replace"](/"/g, _0x43e6bd(0x5f8, 0x5d2, 0x5e8))
    [_0x43e6bd(0x5e0, 0x5f5, 0x5e9)](/'/g, _0x43e6bd(0x5b1, 0x5c5, 0x5bc));
}
function _0x49de() {
  const _0x7f60a8 = [
    "items",
    "includes",
    "&#039;",
    "2372166KFCjtK",
    "remove",
    "Description",
    "blur(0px)",
    "reset-btn",
    "button",
    "adult\x20content",
    "profanity",
    "src",
    "container",
    "No\x20description\x20available",
    "adult",
    "catch",
    "author-name",
    "thumbnail",
    "appendChild",
    "date",
    "span",
    "text",
    "volumeInfo",
    "error",
    "imageLinks",
    "4imHqAg",
    "Enter",
    "1510265mEeIsc",
    "createTextNode",
    "style",
    "publish",
    "xmark-btn",
    "violence",
    "card-div",
    "add",
    "https://via.placeholder.com/150",
    "innerWidth",
    "Please\x20enter\x20a\x20search\x20term.",
    "push",
    "filter",
    "reload",
    "title",
    "1150kuSktf",
    "book-img",
    "card",
    "804624nVQpRN",
    "inappropriate",
    "6HkROYA",
    "div",
    "replace",
    "Unknown\x20Publisher",
    "click",
    "publisher",
    "&gt;",
    "description",
    "json",
    "fa-xmark",
    "addEventListener",
    "2405416kyXxXs",
    "fa-solid",
    "length",
    "1070384DoVcIK",
    "&lt;",
    "getElementById",
    "popup-container",
    "innerHTML",
    "25949TgDBEE",
    "Warning",
    "</span>",
    "classList",
    "then",
    "2IrXZmc",
    "key",
    "&quot;",
    "toLowerCase",
    "explicit",
    "authors",
    "263116DxBXPB",
    "user_input",
    "https://www.googleapis.com/books/v1/volumes?q=",
    "createElement",
    "innerHeight",
    "publishedDate",
    "keypress",
    "<span>Author:",
    "img",
  ];
  _0x49de = function () {
    return _0x7f60a8;
  };
  return _0x49de();
}
