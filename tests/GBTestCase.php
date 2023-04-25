<?php
namespace GenerateBlocks\Tests;
use Mockery\Adapter\Phpunit\MockeryPHPUnitIntegration;
use PHPUnit\Framework\TestCase;
use Brain\Monkey;

class GBTestCase extends TestCase {
	use MockeryPHPUnitIntegration;

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();

		Monkey\Functions\stubs(
			[
				'wp_parse_args'        => static function ( $settings, $defaults ) {
					return \array_merge( $defaults, $settings );
				},
				'wp_strip_all_tags'    => static function( $string, $remove_breaks = false ) {
					$string = \preg_replace( '@<(script|style)[^>]*?>.*?</\\1>@si', '', $string );
					$string = \strip_tags( $string );
					if ( $remove_breaks ) {
						$string = \preg_replace( '/[\r\n\t ]+/', ' ', $string );
					}
					return \trim( $string );
				},
			]
		);
	}

	protected function tearDown(): void {
		parent::tearDown();
		Monkey\tearDown();
	}
}
