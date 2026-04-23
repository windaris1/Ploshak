// Config semua channel
const ConfiguracionCanales = {
  "ch1": {
    url: "https://hls-ls.cdnok9.com/live/TONLAP/index.m3u8?expire=1788427256&sign=72cc58a29d787d621b0832b54e1a78df",
    type: "m3u8",
    title: "Live"
  },
  "ch2": {
    url: "https://live.bbs456.com/live/12704453_8aca061231da71063e66ce8cde023220.m3u8",
    type: "m3u8",
    title: "Live"
  },
  "ch3": {
    url: "https://live.bbs456.com/live/12704453_8aca061231da71063e66ce8cde023220.m3u8",
    type: "m3u8",
    title: "Live"
  },
  "tennis1": {
    url: "https://421b2081187a40368f24e4fb496bfc26.msvdn.net/channel1/manifest.mpd",
    type: "mpd",
    title: "Live"
  },
  "tennis2": {
    url: "https://421b2081187a40368f24e4fb496bfc26.msvdn.net/channel3/manifest.mpd",
    type: "mpd",
    title: "Live"
  },
  "tnt1": {
    url: "https://live-pv-ta.amazon.fastly-edge.com/iad-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "294b5761cefc22d0c6312939e13d8278": "52148f1042d238849f0a7813f1da8a7b"
      }
    }
  },
  "tnt2": {
    url: "https://live-pv-ta.amazon.fastly-edge.com/iad-nitro/live/clients/dash/enc/fb6jy4pxts/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "f288380ca4cef9ad3f27a92a08e9bb8b": "9f18d26291d9230833501f7f822f6875"
      }
    }
  },
  "tnt3": {
    url: "https://live-pv-ta.amazon.fastly-edge.com/iad-nitro/live/clients/dash/enc/5sxuux529k/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "1d96ab366bbe6451edf7407b58e2fa16": "0116201f4a63ac5bf5787d2c610c41a7"
      }
    }
  },
  "tnt4": {
    url: "https://live-pv-ta.amazon.fastly-edge.com/iad-nitro/live/clients/dash/enc/pnu10tp36z/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "192b1115da041585c77200128549efa1": "634e10efe4abbb14be400a3ccbac0258"
      }
    }
  },
  "tsn1": {
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/7janu55dwc/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "e51aa21f2a0fef9aabc120dfb655b52f": "a12a987fe725a40b6be95cd84b15f689"
      }
    }
  },
  "tsn2": {
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/3n6slkgh54/out/v1/8977baf175da4b94873194613dd3fe55/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "daa8ea92553fd16cd6bfae2b8c582715": "4042e041b5639b79b69ae07a872eef9b"
      }
    }
  },
  "tsn3": {
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/lzhmuzmjsl/out/v1/c171eeb214c749f2b351c79df317b21e/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "f5c2b30eac11be1e8cdfc9585f5fe6af": "a8198d17bf9b0da77450fbb919a38b2d"
      }
    }
  },
  "tsn4": {
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/h9urpo3cwb/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "c4088f5f265f9de50cffd80bf89308b7": "2c4d2239d96d532b4ec2050653611003"
      }
    }
  },
  "tsn5": {
    url: "https://otte.cache.aiv-cdn.net/bom-nitro/clients/dash/enc/jkcljgqbx8/out/v1/63bfa701559340f3a2a2cb1fccd24807/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "e853333da2c9196ea11374634231bc45": "de2e2dbe818d78dfad07d6cd9a4c63d4"
      }
    }
  },
  "spotv": {
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "ec7ee27d83764e4b845c48cca31c8eef": "9c0e4191203fccb0fde34ee29999129e"
      }
    }
  },
  "spotv2": {
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "7eea72d6075245a99ee3255603d58853": "6848ef60575579bf4d415db1032153ed"
      }
    }
  },
  "tudnusa": {
    url: "https://aka-live1-ott.izzigo.tv/1/out/u/dash/TUDN-HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "2722647f77b44824c432a3c4555830a2": "1734befb82f4b438bd84195f6c212e7b"
      }
    }
  },
  "nova1": {
    url: "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  "nova2": {
    url: "https://dash2.antik.sk/stream/nvidia_nova_sport2/playlist_cbcs.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  "usanetwork": {
    url: "https://fsly.stream.peacocktv.com/Content/CMAF_OL2-CTR-4s/Live/channel(usa-east)/master.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "043ba1b4a2823fc4a6033178f3560431": "684358d80874b55f9335c73126e4d44e"
      }
    }
  },
  "telemundo": {
    url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(WNJU)/master.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "c71fe7bc82f037c6af21fd299d6341b0": "13223c98886ff43d3c5f271eeb457cc6"
      }
    }
  },
  "tudnmx": {
    url: "https://zap-live1-ott.izzigo.tv/11/out/u/dash/TUDN-HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "2722647f77b44824c432a3c4555830a2": "1734befb82f4b438bd84195f6c212e7b"
      }
    }
  },
  "nbc": {
    url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(knbc)/master.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "0045a118e231f1326bcdb45350b1ceaa": "8c13afbfa54ea37a368b8b859021f6e3"
      }
    }
  },
  "universo": {
    url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(universo-east)/master.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "96b67fa09140329a89b7a1ead134eda3": "c618d32c56cdc6cad8330eb98507ca3f"
      }
    }
  },
  "ziggo1": {
    url: "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw75168188_-627298088/PLTV/86/224/3221241590/3221241590.mpd?accountinfo=~~V2.0~qbcsJh_jU5C9BcZc959e_wae44b4867b3417aa76b5db2da20fe46c~KZzTWjB8qD1zdgbJjRPVLJX-tV0qiN9RBHC_iseGrsmTSRjj06oGDtGlpSCRGOwF3626cf085c08d024c7e4aafc18c32440:UTC,",
    type: "mpd",
    drm: {
      clearKeys: {
        "ef34ae91b4f2415e8439b2ad105e7488": "243248d8de1ff8c7c587ee2057317523"
      }
    }
  },
  "ziggo2": {
    url: "https://mag03.tvx.prd.tv.odido.nl/wh7f454c46tw266117884_-1972819316/PLTV/86/224/3221241560/3221241560.mpd?accountinfo=~~V2.0~OhA1DF4svOZppKxb-t-Ngw144cce44121c63284a33d5453493e5c8~1_Fmlu5PevHMYnEi9Z_HX2goKAd0VHSuxZMoIcAXcawYvG1meqGp2eQ2Ibhjvh7e59e7f6df3d57f23a32024ad67f0f19dc:UTC,",
    type: "mpd",
    drm: {
      clearKeys: {
        "3cfa8625f650406ebf6a4d1ea737f572": "0534e747c70b364aa7210e1bf3191df0"
      }
    }
  },
  "ziggo3": {
    url: "https://mag02.tvx.prd.tv.odido.nl/wh7f454c46tw407556707_-381738111/PLTV/86/224/3221241511/3221241511.mpd?accountinfo=~~V2.0~yVi0dMX4icO5Ka9e92EQfg8812e1c1044f7d357066472e3ee99ef4~2dRB9E-vDtoAbYl169LbcJpxUgWVJtbeU_PlhGfNUflphvljOb5VaEhxruETYG9qcccaf5c5b655bf7504ed7ec5a1dd798f:UTC,",
    type: "mpd",
    drm: {
      clearKeys: {
        "4dbea4b5713a4aa1ae3a2544cd522fc7": "a8323ea99b2d6200a48e1bc27322d548"
      }
    }
  },
  "ziggo4": {
    url: "https://da-d436236420010b88000103030000000006.id.cdn.upcbroadband.com/wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000097_019370/go-dash-fhd-avc/NL_000097_019370.mpd?p=web",
    type: "mpd",
    drm: {
      clearKeys: {
        "16bf72dc22743d929c4318e193408373": "eae51a1e3904124963074cbf432c7c8e"
      }
    }
  },
  "ziggo5": {
    url: "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw865586829_-819821292/PLTV/86/224/3221241610/3221241610.mpd?accountinfo=~~V2.0~LNS2PBO5tyhp5z1Pe6ObBA6cd7a4ec35c4492167b9376e6dff2932~BZw2dESHw-I1PQCFh9gGxCMvrIIzgMdYAe900qj8l6aoXUX9ahyR6I9EUIu7nDR4f4887615c83ea7a8cee6dd33137c4ebe:UTC,",
    type: "mpd",
    drm: {
      clearKeys: {
        "3fb40d85724942f994d86943f48021db": "a6da8742502c8a2153067f5f2a70fb02"
      }
    }
  },
  "ziggo6": {
    url: "https://mag03.tvx.prd.tv.odido.nl/wh7f454c46tw1024019879_757686866/PLTV/86/224/3221241521/3221241521.mpd?accountinfo=~~V2.0~URnD_afuosWHfY5OEqRXOwfa01c8ac56cf4511de39c2c4a3cab278~iVxKjbtf2gx_dYFqI-vt5C4Cu3COYDjZaw6C_kO2T2wm30fwo1ctD1gr_e2PrgTh48867c3177f3c34842031623cb2e06c9:UTC,",
    type: "mpd",
    drm: {
      clearKeys: {
        "1a0ffa532aa2498490826e2f6a37f7c9": "a8cec27bc7d47909c5b0d8f473b43e8d"
      }
    }
  },
"sportv1": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "eaea45512d137def15b209a089cafd14": "8d42db746ed0c4df61729b0d68d42bd7"
        }
    }
},
"sportv2": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/4yiko4it8k/out/v1/b77dd424c745443aba2f3f88d418f797/cenc-sd.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "9009b7189e3e68cc09d17811f2beb55a": "dd3f96a94c909da48ff40c92aabf8cf3"
        }
    }
},
"sportv3": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/4yiko4it8k/out/v1/b77dd424c745443aba2f3f88d418f797/cenc.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "9009b7189e3e68cc09d17811f2beb55a": "dd3f96a94c909da48ff40c92aabf8cf3"
        }
    }
},
"sportv4": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/6otiglnptp/out/v1/add7499679b0422cb6791f7701f95ecc/cenc.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "902e5ec0e3d05e665daa32fc23f4f59e": "7b2322a273843921a43e2c61dac7cae3"
        }
    }
},
"cazetv": {
    url: "https://a56aivottepl-a.akamaihd.net/gru-nitro/live/clients/dash/enc/3ynrpdanq2/out/v1/81fd4c26584044d2b1a1cc5b32fa9af0/cenc.mpd?amznDtid=AOAGZA014O5RE&encoding=segmentBase",
    type: "mpd",
    drm: {
        clearKeys: {
            "34475edab991ad5e92548aebd710410a": "501b209cccd323ac00bf5ac15b406cb4"
        }
    }
},
"fubo": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "dc69b6159a0f9f0a4e03b3ff91cbacd5": "d0dcbcd7723bc40df0bf34c9c092d51f"
        }
    }
},
"fubo2": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/uiffe4jhf0/out/v1/3534efafca8c4815adbb4d2e9a1fe003/cenc.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "3dcfbec0e7146928baa55210bf2cb62f": "bc85f74f815d9be5ae1dd6defaa05135"
        }
    }
},
"laliga": {
    url: "https://a166aivottlinear-a.akamaihd.net/OTTB/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd",
    type: "mpd",
    drm: {
        clearKeys: {
            "620e51b82596475517a27aa425c52280": "2b9ba811e9c5aeafc8ae1b71cdca4d6a"
        }
    }
},
  "daznlaliga": {
    url: "https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "43d1c3b25207ff38b22ccfe17d302367": "7b1f85f6e81059473b114c16a25c829a"
      }
    }
  },
  "laligatv": {
    url: "https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/tu06vubgf9/out/v1/7668f47d28e345979c072e361f3d3ce3/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "6d08b265a6639e32da7c880d5491e3d2": "0c92556ca14b95f367993710e7cfbc94"
      }
    }
  },
  "espn2nl": {
    url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN-2-HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "90e2e491c850a49a5ab21bb6fa6b4d24": "4d7e33da19b971cef49e35eccdb9de0b"
      }
    }
  },
  "espn3nl": {
    url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN-3-HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "0355f64277082b903022985035c498ca": "7a8ed20a4958398677e2c9ccd5a53a00"
      }
    }
  },
  "espn1mx": {
    url: "https://bks400-tol-110.quieroxview.com.mx/bpk-tv/espn_hd/default/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "52358519f886446d82834a803b36f796": "58b6ac8e07d354b178255e03b9d0f819"
      }
    }
  },
  "espn2mx": {
    url: "https://zap-live2-ott.izzigo.tv/1/out/u/dash/ESPN2HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "90e2e491c850a49a5ab21bb6fa6b4d24": "4d7e33da19b971cef49e35eccdb9de0b"
      }
    }
  },
  "bein1aus": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "335dad778109954503dcbb21dc92015f": "24bfd75d436cbf73168a2a2dccd40281"
      }
    }
  },
  "bein2aus": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "0b42be2664d7e811d04f3e504e0924c5": "ae24090123b8c72ac5404dc152847cb8"
      }
    }
  },
  "bein3aus": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "7995c724a13748ed970840a8ab5bb9b3": "67bdaf1e2175b9ff682fcdf0e2354b1e"
      }
    }
  },
  "premier1": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/m6sqanvm2m/out/v1/f6beb46c6e9a4132ad739f3ca27df6aa/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "1444f4235529f183f0a5a486befe9cdb": "e5e3fec67a1bb3472a2089c8a0a2557f"
      }
    }
  },
  "premier2": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "1a5df53609ebc9857898c490f4724918": "77f62980d582ec541280796acf8b2d19"
      }
    }
  },
  "go3s1": {
    url: "https://v4-pan-n79-cdn-01.live.cdn.cgates.lt/live/dash/560502/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "f48a8131e05f4d6e84de19f086c781a6": "fd28f2f966a906f4d4dcfd72ae90094e"
      }
    }
  },
  "go3s2": {
    url: "https://v4-pan-n79-cdn-01.live.cdn.cgates.lt/live/dash/560502/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "f48a8131e05f4d6e84de19f086c781a6": "fd28f2f966a906f4d4dcfd72ae90094e"
      }
    }
  },
  "italia1": {
    url: "https://live03p-seg.msf.cdn.mediaset.net/live/ch-i1/i1-dash-widevine.isml/manifest.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "00f9f3c0783536b8ee91704e23b78016": "bfd04d6f544c9cc4d35cb13ab6778587"
      }
    }
  },
  "skytede": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/jglxtfgzxa/out/v1/28a70425aec84b55bb9d29ccd5d53f45/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "04e1aff27c2a13ad9aa9556501684743": "2097e55038d3cee7d69e88f4069840d1"
      }
    }
  },
  "skymixde": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/tjz3qplazr/out/v1/546e7eee67cd472fb34f53112df73144/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "3c393a1661a7a0c306ed4b2d3f8c7b7e": "74583ae652f0ed1b66a6aae0a8f8e0a1"
      }
    }
  },
  "isra1": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "c3b32b23081b5486ae5176da9c358808": "4708b352ee1d50ccdf94af9d2a952ed8"
      }
    }
  },
  "5sport": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "c3b32b23081b5486ae5176da9c358808": "4708b352ee1d50ccdf94af9d2a952ed8"
      }
    }
  },
  "isra2": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_plus/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "bc8890f394376152b7570ac185a95536": "dbbd601df4236ea0f55e60d99dd70564"
      }
    }
  },
  "5sportplus": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_plus/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "bc8890f394376152b7570ac185a95536": "dbbd601df4236ea0f55e60d99dd70564"
      }
    }
  },
  "5sportstar": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_starz/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "f788e107fecdf189b157766bc4db084e": "7f531e4eed5d07f5ae187c8807b40480"
      }
    }
  },
  "5sportlive": {
    url: "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_live/live.livx?indexMode&dvr=7200000",
    type: "mpd",
    drm: {
      clearKeys: {
        "cc667cda2ff49c4500fdf1ad847d4fc0": "13a48dc2c1257fd9a119b448de5225f6"
      }
    }
  },
  "sgm": {
    url: "https://tglmp04.akamaized.net/out/v1/5793335474d74566a8a0adfa260f22a9/manifest.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "5332345367554fd39588283a2b949d02": "8abcd0b3126923b068c26508e24c9f69"
      }
    }
  },
  "sport1cz": {
    url: "https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  "sport2cz": {
    url: "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  "hrt2": {
    url: "https://cdn1oiv.akamaized.net/hrtliveorigin/hrt2e3.smil/1/manifest.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "bc01006c0e4b39eeadf359f4178124ca": "b7a197afeb4ad5c1dc4d0ffba402d781"
      }
    }
  },
  "sport1baltic": {
    url: "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561204/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "032ba9e7db644873861490a3afc863d8": "fd29ed4731ecafba696ac68cbe870008"
      }
    }
  },
  "sport2baltic": {
    url: "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561209/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "5fd3f407ea7c465b854db7cd8235b39b": "0c2ad3408bb09f698e86e1ca2e26a888"
      }
    }
  },
  "mlive5": {
    url: "https://tglmp04.akamaized.net/out/v1/400fc0702dee453bb33ebcc29466e58a/manifest.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "91b9592c819246c68b3b08a1fe08ba22": "fa0d80dfd865b34077bae44cd4a0c5e6"
      }
    }
  },
  "universow": {
    url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(universo-west)/master.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "1b0d41ddf54a37a6b6caa0484bb3df40": "0892217616382e2faf84f6de3847cc7d"
      }
    }
  },
  "ctsport": {
    url: "https://dash2.antik.sk/stream/nvidia_ct_sport/playlist_cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  "tv2xdk": {
    url: "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_tv2_sport_x_live/sm_tv2_sport_x_live.isml/playlist.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "6529e289d61a7d467c7a6a8d80189b20": "4f82fb1d198a249b50fe7cb093f3705b",
        "6529e289d61a7d467c7a6a8d80189b10": "8df6584244a3a3303ac9b3fb689e2e19"
      }
    }
  },
  "tntmex": {
    url: "https://live2-ott.izzigo.tv/2/out/u/dash/TNT-HD/default.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "dca8597f12f8d6928b55c1291c7bb300": "36c8b3f51d474b95f0adad70899343e1"
      }
    }
  },
  "telefear": {
    url: "https://cdnlb.gigared.com.ar/live/eds/Telefe/sa_live_dash/Telefe.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "865b35fdb4c119f3ccfd4ee392928aef": "b43adf6d88b3befbf7f69a71dc273e46"
      }
    }
  },
  "cbssports": {
    url: "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "d9623774ac5c8c351aafe97c5fe70267": "5164e6d05164a2d65fa8fcc962aa4861"
      }
    }
  },
  "mncsp1": {
    url: "https://cors-proxy.cooks.fyi/https://d2tjypxxy769fn.cloudfront.net/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "39c4dc6704cf4ceea2fd4863b88d8a7d": "4e9d7954c2ff46759289da4fc9f018ea"
      }
    }
  },
  "mncsp2": {
    url: "https://cors-proxy.cooks.fyi/https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "911e72adf36946afbdbb4f80782a8394": "08aec548a851ba64b7172ae7f05cb91c"
      }
    }
  },
  "sportdigital": {
    url: "https://otte.bia-cf.live.pv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "0ad4080cdff8c60b1233b22087f0b340": "285f129c5eca01dd08a5d5a14ad801c8"
      }
    }
  },
  "vsport1": {
    url: "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport1_hd_live/sm_viasport1_hd_live.isml/playlist.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "a0e68f01a5428cbdb8cfac2080c66b20": "556d72c812df452fad9bed66292bfc63",
        "a0e68f01a5428cbdb8cfac2080c66b10": "be7f9d1a00bbd0478335a4a48379157d"
      }
    }
  },
  "vsport2": {
    url: "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport2_hd_live/sm_viasport2_hd_live.isml/playlist.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "b62aca5b566dc3ded74233192b28a120": "e8c5369c9c4aa58c1c8489c7db52db8c",
        "b62aca5b566dc3ded74233192b28a110": "143bfe648cc9d14917d41e0662452771"
      }
    }
  },
  "vsport3": {
    url: "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport3_hd_live/sm_viasport3_hd_live.isml/playlist.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "10827657b810ae957f6adc178eca9c20": "3f73e8c9b64b2972bd25859efef7e5ac",
        "10827657b810ae957f6adc178eca9c10": "ca8605499cbdc8e0d2f12898258f8f6e"
      }
    }
  },
  "vsport4": {
    url: "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport_pluss_hd_live/sm_viasport_pluss_hd_live.isml/playlist.mpd",
    type: "mpd",
    drm: {
      clearKeys: {
        "5ac608b8804cec0453314a751cdf5f20": "2bfed47e32b19e4ecf3f0692876e4ce5",
        "5ac608b8804cec0453314a751cdf5f10": "a01e1090ee4a41d57dff74a8703e17cf"
      }
    }
  }
}; // tutup ConfiguracionCanales
