#![deny(clippy::all)]

use napi_derive::napi;
use dissolve::strip_html_tags;

#[napi]
#[allow(dead_code)]
fn html_text_content(input: String) -> String {
  // convert Vec<String> to str in rust
  strip_html_tags(input.as_ref()).join(" ")
}
