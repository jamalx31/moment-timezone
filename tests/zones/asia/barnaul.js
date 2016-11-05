"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Barnaul"] = {
	"1919" : helpers.makeTestYear("Asia/Barnaul", [
		["1919-12-09T18:24:59+00:00", "23:59:59", "LMT", -335],
		["1919-12-09T18:25:00+00:00", "00:25:00", "+06", -360]
	]),

	"1930" : helpers.makeTestYear("Asia/Barnaul", [
		["1930-06-20T17:59:59+00:00", "23:59:59", "+06", -360],
		["1930-06-20T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"1981" : helpers.makeTestYear("Asia/Barnaul", [
		["1981-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1981-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1981-09-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1981-09-30T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1982" : helpers.makeTestYear("Asia/Barnaul", [
		["1982-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1982-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1982-09-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1982-09-30T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1983" : helpers.makeTestYear("Asia/Barnaul", [
		["1983-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1983-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1983-09-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1983-09-30T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1984" : helpers.makeTestYear("Asia/Barnaul", [
		["1984-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1984-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1984-09-29T18:59:59+00:00", "02:59:59", "+08", -480],
		["1984-09-29T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1985" : helpers.makeTestYear("Asia/Barnaul", [
		["1985-03-30T18:59:59+00:00", "01:59:59", "+07", -420],
		["1985-03-30T19:00:00+00:00", "03:00:00", "+08", -480],
		["1985-09-28T18:59:59+00:00", "02:59:59", "+08", -480],
		["1985-09-28T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1986" : helpers.makeTestYear("Asia/Barnaul", [
		["1986-03-29T18:59:59+00:00", "01:59:59", "+07", -420],
		["1986-03-29T19:00:00+00:00", "03:00:00", "+08", -480],
		["1986-09-27T18:59:59+00:00", "02:59:59", "+08", -480],
		["1986-09-27T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1987" : helpers.makeTestYear("Asia/Barnaul", [
		["1987-03-28T18:59:59+00:00", "01:59:59", "+07", -420],
		["1987-03-28T19:00:00+00:00", "03:00:00", "+08", -480],
		["1987-09-26T18:59:59+00:00", "02:59:59", "+08", -480],
		["1987-09-26T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1988" : helpers.makeTestYear("Asia/Barnaul", [
		["1988-03-26T18:59:59+00:00", "01:59:59", "+07", -420],
		["1988-03-26T19:00:00+00:00", "03:00:00", "+08", -480],
		["1988-09-24T18:59:59+00:00", "02:59:59", "+08", -480],
		["1988-09-24T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1989" : helpers.makeTestYear("Asia/Barnaul", [
		["1989-03-25T18:59:59+00:00", "01:59:59", "+07", -420],
		["1989-03-25T19:00:00+00:00", "03:00:00", "+08", -480],
		["1989-09-23T18:59:59+00:00", "02:59:59", "+08", -480],
		["1989-09-23T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1990" : helpers.makeTestYear("Asia/Barnaul", [
		["1990-03-24T18:59:59+00:00", "01:59:59", "+07", -420],
		["1990-03-24T19:00:00+00:00", "03:00:00", "+08", -480],
		["1990-09-29T18:59:59+00:00", "02:59:59", "+08", -480],
		["1990-09-29T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1991" : helpers.makeTestYear("Asia/Barnaul", [
		["1991-03-30T18:59:59+00:00", "01:59:59", "+07", -420],
		["1991-03-30T19:00:00+00:00", "02:00:00", "+07", -420],
		["1991-09-28T19:59:59+00:00", "02:59:59", "+07", -420],
		["1991-09-28T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1992" : helpers.makeTestYear("Asia/Barnaul", [
		["1992-01-18T19:59:59+00:00", "01:59:59", "+06", -360],
		["1992-01-18T20:00:00+00:00", "03:00:00", "+07", -420],
		["1992-03-28T18:59:59+00:00", "01:59:59", "+07", -420],
		["1992-03-28T19:00:00+00:00", "03:00:00", "+08", -480],
		["1992-09-26T18:59:59+00:00", "02:59:59", "+08", -480],
		["1992-09-26T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1993" : helpers.makeTestYear("Asia/Barnaul", [
		["1993-03-27T18:59:59+00:00", "01:59:59", "+07", -420],
		["1993-03-27T19:00:00+00:00", "03:00:00", "+08", -480],
		["1993-09-25T18:59:59+00:00", "02:59:59", "+08", -480],
		["1993-09-25T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1994" : helpers.makeTestYear("Asia/Barnaul", [
		["1994-03-26T18:59:59+00:00", "01:59:59", "+07", -420],
		["1994-03-26T19:00:00+00:00", "03:00:00", "+08", -480],
		["1994-09-24T18:59:59+00:00", "02:59:59", "+08", -480],
		["1994-09-24T19:00:00+00:00", "02:00:00", "+07", -420]
	]),

	"1995" : helpers.makeTestYear("Asia/Barnaul", [
		["1995-03-25T18:59:59+00:00", "01:59:59", "+07", -420],
		["1995-03-25T19:00:00+00:00", "03:00:00", "+08", -480],
		["1995-05-27T15:59:59+00:00", "23:59:59", "+08", -480],
		["1995-05-27T16:00:00+00:00", "23:00:00", "+07", -420],
		["1995-09-23T19:59:59+00:00", "02:59:59", "+07", -420],
		["1995-09-23T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1996" : helpers.makeTestYear("Asia/Barnaul", [
		["1996-03-30T19:59:59+00:00", "01:59:59", "+06", -360],
		["1996-03-30T20:00:00+00:00", "03:00:00", "+07", -420],
		["1996-10-26T19:59:59+00:00", "02:59:59", "+07", -420],
		["1996-10-26T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1997" : helpers.makeTestYear("Asia/Barnaul", [
		["1997-03-29T19:59:59+00:00", "01:59:59", "+06", -360],
		["1997-03-29T20:00:00+00:00", "03:00:00", "+07", -420],
		["1997-10-25T19:59:59+00:00", "02:59:59", "+07", -420],
		["1997-10-25T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1998" : helpers.makeTestYear("Asia/Barnaul", [
		["1998-03-28T19:59:59+00:00", "01:59:59", "+06", -360],
		["1998-03-28T20:00:00+00:00", "03:00:00", "+07", -420],
		["1998-10-24T19:59:59+00:00", "02:59:59", "+07", -420],
		["1998-10-24T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1999" : helpers.makeTestYear("Asia/Barnaul", [
		["1999-03-27T19:59:59+00:00", "01:59:59", "+06", -360],
		["1999-03-27T20:00:00+00:00", "03:00:00", "+07", -420],
		["1999-10-30T19:59:59+00:00", "02:59:59", "+07", -420],
		["1999-10-30T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2000" : helpers.makeTestYear("Asia/Barnaul", [
		["2000-03-25T19:59:59+00:00", "01:59:59", "+06", -360],
		["2000-03-25T20:00:00+00:00", "03:00:00", "+07", -420],
		["2000-10-28T19:59:59+00:00", "02:59:59", "+07", -420],
		["2000-10-28T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2001" : helpers.makeTestYear("Asia/Barnaul", [
		["2001-03-24T19:59:59+00:00", "01:59:59", "+06", -360],
		["2001-03-24T20:00:00+00:00", "03:00:00", "+07", -420],
		["2001-10-27T19:59:59+00:00", "02:59:59", "+07", -420],
		["2001-10-27T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2002" : helpers.makeTestYear("Asia/Barnaul", [
		["2002-03-30T19:59:59+00:00", "01:59:59", "+06", -360],
		["2002-03-30T20:00:00+00:00", "03:00:00", "+07", -420],
		["2002-10-26T19:59:59+00:00", "02:59:59", "+07", -420],
		["2002-10-26T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2003" : helpers.makeTestYear("Asia/Barnaul", [
		["2003-03-29T19:59:59+00:00", "01:59:59", "+06", -360],
		["2003-03-29T20:00:00+00:00", "03:00:00", "+07", -420],
		["2003-10-25T19:59:59+00:00", "02:59:59", "+07", -420],
		["2003-10-25T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2004" : helpers.makeTestYear("Asia/Barnaul", [
		["2004-03-27T19:59:59+00:00", "01:59:59", "+06", -360],
		["2004-03-27T20:00:00+00:00", "03:00:00", "+07", -420],
		["2004-10-30T19:59:59+00:00", "02:59:59", "+07", -420],
		["2004-10-30T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2005" : helpers.makeTestYear("Asia/Barnaul", [
		["2005-03-26T19:59:59+00:00", "01:59:59", "+06", -360],
		["2005-03-26T20:00:00+00:00", "03:00:00", "+07", -420],
		["2005-10-29T19:59:59+00:00", "02:59:59", "+07", -420],
		["2005-10-29T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2006" : helpers.makeTestYear("Asia/Barnaul", [
		["2006-03-25T19:59:59+00:00", "01:59:59", "+06", -360],
		["2006-03-25T20:00:00+00:00", "03:00:00", "+07", -420],
		["2006-10-28T19:59:59+00:00", "02:59:59", "+07", -420],
		["2006-10-28T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2007" : helpers.makeTestYear("Asia/Barnaul", [
		["2007-03-24T19:59:59+00:00", "01:59:59", "+06", -360],
		["2007-03-24T20:00:00+00:00", "03:00:00", "+07", -420],
		["2007-10-27T19:59:59+00:00", "02:59:59", "+07", -420],
		["2007-10-27T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2008" : helpers.makeTestYear("Asia/Barnaul", [
		["2008-03-29T19:59:59+00:00", "01:59:59", "+06", -360],
		["2008-03-29T20:00:00+00:00", "03:00:00", "+07", -420],
		["2008-10-25T19:59:59+00:00", "02:59:59", "+07", -420],
		["2008-10-25T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2009" : helpers.makeTestYear("Asia/Barnaul", [
		["2009-03-28T19:59:59+00:00", "01:59:59", "+06", -360],
		["2009-03-28T20:00:00+00:00", "03:00:00", "+07", -420],
		["2009-10-24T19:59:59+00:00", "02:59:59", "+07", -420],
		["2009-10-24T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2010" : helpers.makeTestYear("Asia/Barnaul", [
		["2010-03-27T19:59:59+00:00", "01:59:59", "+06", -360],
		["2010-03-27T20:00:00+00:00", "03:00:00", "+07", -420],
		["2010-10-30T19:59:59+00:00", "02:59:59", "+07", -420],
		["2010-10-30T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"2011" : helpers.makeTestYear("Asia/Barnaul", [
		["2011-03-26T19:59:59+00:00", "01:59:59", "+06", -360],
		["2011-03-26T20:00:00+00:00", "03:00:00", "+07", -420]
	]),

	"2014" : helpers.makeTestYear("Asia/Barnaul", [
		["2014-10-25T18:59:59+00:00", "01:59:59", "+07", -420],
		["2014-10-25T19:00:00+00:00", "01:00:00", "+06", -360]
	]),

	"2016" : helpers.makeTestYear("Asia/Barnaul", [
		["2016-03-26T19:59:59+00:00", "01:59:59", "+06", -360],
		["2016-03-26T20:00:00+00:00", "03:00:00", "+07", -420]
	])
};